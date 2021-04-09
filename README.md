# Structure

- Analysis & Comparison
  - [`got`](https://github.com/sindresorhus/got#readme)
  - [`request`](https://github.com/request/request#readme)
    - [`request-promise`](https://github.com/request/request-promise#readme)
    - [`promisify`](https://github.com/dpw/promisify#readme)
  - [`axios`](https://github.com/axios/axios#table-of-contents)
  - [`fetch`](https://github.com/andris9/fetch#fetch)
  - Code snippets... 
  - Syntax, readability
  - Structure of responses
  - Method for catching errors
  - Structure of errors
- Suggestion
  - GOT
  - Why?
- Recommendation (Inside Express.js)
  - Migration reference

## Error Types

Exception
  Error in JS

Network Error
  F

HTTP Error
  Nothing to do with JS, receives response and status code

LOOK INTO: https://nodejs.org/api/http.html

---

- Async/Await
  - got
  - **request-promise**
  - axios
  - fetch
- Callbacks
  - got
  - **request**
  - axios
  - fetch

This will require us to do two distinct options. So, maybe index calls both a callback.js and an asyncAwait.js 

Errors, for example: 
- Async/await uses try/catch
- Callbacks use error param in callback or .catch
