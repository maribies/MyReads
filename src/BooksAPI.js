const api = "https://reactnd-books-api.udacity.com"

//Use an Authorization header to work with your own data
let token = localStorage.token
if (!token)
  token = localStorage.token = Math.random().toString(36).substr(-8)
const headers = {
  'Accept': 'application/json',
  'Authorization': token
}

// The following endpoints are available:
//
// GET /status
// GET /books
// GET /books/:id
// PUT /books/:id { shelf }
// POST /search { query, maxResults }

export const getBooks = () => fetch(`${api}/books`, {headers}).then(res => res.json()).then(data => data.books)

export const getId = (bookId) => fetch(`${api}/books/${bookId}`, {headers}).then(res => res.json()).then(data => data.book)

export const search = (query) => fetch(`${api}/search`, {
  method: 'POST',
  headers: {
    ...headers,
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({query})
}).then(res => res.json()).then(data => data.books)

export const update = (book, shelf) => fetch(`${api}/books/${book.id}`, {
  method: 'PUT',
  headers: {
    ...headers,
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({shelf})
}).then(res => res.json())
