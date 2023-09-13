# CRUD Rest API

## Introduction

This API allows you to perform CRUD (Create, Read, Update, Delete) operations on "person" records stored in a MongoDB Atlas database. Use this documentation to understand the available endpoints, request/response formats, and how to interact with the API.

## Authentication

This API does not require authentication for demonstration purposes. In a production environment, you should implement authentication and authorization mechanisms.

## Endpoints

### Create a new person

- Endpoint: `POST https://alert-puce-pelican.cyclic.app/api/persons`
- Description: Create a new person record in the database with the given data.

#### Resquest Body: 
```json
{
    "name": "John Doe",
    "age": "21",
    "email": "johndoe@gmail.com",
    "phone_no": "+2340123456789"
}
```

- `name` is a string containing the person's name.
- `age` is a string containing the person's age.
- `email` is a string containing the person's email address.
- `phone_no` is a string containing the person's phone number.

#### Response Body (HTTP 201 Created):
```json
{
    "name": "John Doe",
    "age": "21",
    "email": "johndoe@gmail.com",
    "phone_no": "+2340123456789",
    "_id": "6501a13e5e1fde36048f0843",
    "__v": 0
}
```

### Get a person by ID

- Endpoint: `GET https://alert-puce-pelican.cyclic.app/api/persons/:id`
- Description: Get a person record from the database with the given ID.

#### Response Body (HTTP 200 OK):
```json
{
    "name": "John Doe",
    "age": "21",
    "email": "johndoe@gmail.com",
    "phone_no": "+2340123456789",
    "_id": "6501a13e5e1fde36048f0843",
    "__v": 0
}
```

### Update a person by ID

- Endpoint: `PUT https://alert-puce-pelican.cyclic.app/api/persons/:id`
- Description: Update a person record in the database with the given ID.

#### Request Body:
```json
{
    "name": "John Doe",
    "age": "25",
    "email": "john@gmail.com",
    "phone_no": "+2340123456789"
}
```

- `name` is a string containing the person's name.
- `age` is a string containing the person's age.
- `email` is a string containing the person's email address.
- `phone_no` is a string containing the person's phone number.

#### Response Body (HTTP 200 OK):
```json
{
    "name": "John Doe",
    "age": "25",
    "email": "john@gmail.com",
    "phone_no": "+2340123456789",
    "_id": "6501a13e5e1fde36048f0843",
    "__v": 0
}
```

### Delete a person by ID

- Endpoint: `DELETE https://alert-puce-pelican.cyclic.app/api/persons/:id`
- Description: Delete a person record from the database with the given ID.

#### Response Body (HTTP 200 OK):
```json
{
    "message": "Person deleted successfully"
}
```