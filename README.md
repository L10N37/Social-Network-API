# Social Network API

A backend API for a social network application that allows users to share their thoughts, react to thoughts, add friends, and more.

## Table of Contents
- [Description](#description)
- [Technologies](#technologies)
- [Installation](#installation)
- [Usage](#usage)
- [API Routes](#api-routes)
  - [Users](#users)
  - [Thoughts](#thoughts)
  - [Reactions](#reactions)
- [Contributing](#contributing)
- [License](#license)
- [Examples](#examples)

## Description

This project provides a RESTful API built using Node.js, Express.js, and MongoDB. It allows users to perform various operations, such as creating users, posting thoughts, adding reactions, managing friends, and more. The API follows the CRUD (Create, Read, Update, Delete) operations for each resource.

## Technologies

- Node.js
- Express.js
- MongoDB
- Mongoose

## Installation

To install and set up the project locally, follow these steps:

1. Clone the repository: `git clone <not on github yet>`
2. Navigate to the project directory: `cd whateverIcallthisApp`
3. Install the dependencies: `npm install`

## Usage

1. **Prerequisites:** Before starting, make sure you have installed MongoDB and Node.js on your system. You can download them from the following links:
   - [MongoDB](https://www.mongodb.com/try/download)
   - [Node.js](https://nodejs.org/)

2. **Set up the database:**
   - Open MongoDB Compass and connect using the default credentials.
   - In the MongoDB shell, create a database named 'socialmediadb' by typing the following command:
     ```bash
     use socialmediadb
     ```

3. **Start the server:**
   - Open a terminal or command prompt and navigate to the project directory.
   - Run the following command to start the server:
     ```bash
     node app
     ```

4. **Access the API endpoints:**
   - Use a tool like [Insomnia](https://insomnia.rest/) or [Postman](https://www.postman.com/) to interact with the API endpoints.



## API Routes

### Users

- **GET /api/users**: Get all users.
- **GET /api/users/:userId**: Get a single user by ID.
- **POST /api/users**: Create a new user.
- **PUT /api/users/:userId**: Update a user by ID.
- **DELETE /api/users/:userId**: Delete a user by ID.
- **POST /api/users/:userId/friends/:friendId**: Add a friend to a user's friend list.
- **DELETE /api/users/:userId/friends/:friendId**: Remove a friend from a user's friend list.

### Thoughts

- **GET /api/thoughts**: Get all thoughts.
- **GET /api/thoughts/:thoughtId**: Get a single thought by ID.
- **POST /api/thoughts**: Create a new thought.
- **PUT /api/thoughts/:thoughtId**: Update a thought by ID.
- **DELETE /api/thoughts/:thoughtId**: Delete a thought by ID.

### Reactions

- **POST /api/thoughts/:thoughtId/reactions**: Create a reaction for a thought.
- **DELETE /api/thoughts/:thoughtId/reactions/:reactionId**: Delete a reaction from a thought.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please feel free to open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).

## Examples

[Here is a more concise guide on the use of routes](EXAMPLES.md).

