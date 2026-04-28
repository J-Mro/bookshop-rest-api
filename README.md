# The Bookshop REST API 📚

## About

The **Bookshop RESTful API** is your one-stop-shop for all things books.

This was a simple sprint done to refresh myself on Express servers, RESTful APIs, and the Model-View-Controller design pattern.

**Teck Stack used:** JavaScript, Express JS (v.5.2.1), Node js (v.25.2.1), and Nodemon (v.3.1.14).

Please note that versions below these may not allow the app to run properly.

## Getting Started

To get this project running please enter the following commands in your terminal:

```bash
git clone https://github.com/J-Mro/bookshop-rest-api.git

cd bookshop-rest-api

npm install
```

## Local Hosting

The Bookshop REST API can be run locally by running the following command in your terminal within this project's directory:

```js
npm run dev
```

This should produce the output `The server is listening on port 9000...`

Navigate to an API development platform and enter the following URL to begin testing endpoints:

```
http://localhost:9000/
```

## Endpoints

### GET /api/books

Retrieve an array of all book objects available.

Example response:

```js
[
	{
		"id": 1,
		"title": "The Pragmatic Programmer",
		"author": "David Thomas",
		"genre": "technology",
		"available": true
	},
	{
		"id": 2,
		"title": "Clean Code",
		"author": "Robert C. Martin",
		"genre": "technology",
		"available": false
	},
    ...
]
```

### GET /api/books/:id

Retrieves a single book object by it's `id` value.

Example response:

```js
{
	"id": 2,
	"title": "Clean Code",
	"author": "Robert C. Martin",
	"genre": "technology",
	"available": false
}
```

### POST /api/books

Add a book to the dataset. Note that the `available` property is set to `true` by default. This method returns the added book object.

Request body format:

```js
{
    "title": "Call Me By Your Name",
    "author": "Andre Aciman",
    "genre": "fiction"
}
```

Example response:

```js
{
	"id": 7,
	"title": "Call Me By Your Name",
	"author": "Andre Aciman",
	"genre": "fiction",
	"available": true
}
```

### PATCH /api/books/:id

Update a book's availability. This method returns the book object that you have updated.

Request body format:

```js
{
    "available":"true"
}
```

Example response:

```js
{
	"id": 2,
	"title": "Clean Code",
	"author": "Robert C. Martin",
	"genre": "technology",
	"available": "true"
}
```
