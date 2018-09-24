const api = "https://reactnd-books-api.udacity.com"

//Use an Authorization header to work with your own data
let token = local.token

const headers =  headers: { 'Authorization': token }

// The following endpoints are available:
//
// GET /status
// GET /books
// GET /books/:id
// PUT /books/:id { shelf }
// POST /search { query, maxResults }

export const getBooks = () =>
fetch(`${api}/books` , { headers })
.then(res => res.json())
.then(data => data.books)
