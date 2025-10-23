# Lab 6.2: Promises and Error Handling Challenge

### Part 1: Set Up Your Project

- [x] Create a new project with Vite
- [x] Create an `apiSimulator.ts` file to hold simulated API functions that use Promises to return mock data or errors after a delay.

### Part 2: Implement API Simulation Functions

- [x] In `apiSimulator.ts`, create the following functions:
  - [x] **`fetchProductCatalog()`** — returns a mock list of products after 1s, sometimes rejects with `"Failed to fetch product catalog"`.
  - [x] **`fetchProductReviews(productId: number)`** — returns mock reviews after 1.5s, sometimes rejects with `"Failed to fetch reviews for product ID ${productId}"`.
  - [x] **`fetchSalesReport()`** — returns a mock sales report after 1s, sometimes rejects with `"Failed to fetch sales report"`.

### Part 3: Build Main Application Logic

- [x] Create an `index.ts` file for the main logic.
- [x] Use the API functions to:
  - [x] Fetch and display product details.
  - [x] Fetch reviews for each product.
  - [x] Fetch and display the sales report.
- [x] Handle errors using `.catch()` and show error messages in the console.
- [x] Use `.finally()` to log when all API calls have been attempted.

### Part 4: Custom Error Classes

- [x] Create `NetworkError` and `DataError` classes for specific error scenarios.
- [x] Update API simulation functions to reject Promises using these custom errors.

### Part 5: Optional Challenge – Retry Mechanism

- [ ] Create a `retryPromise` utility that:
  - [ ] Accepts an async function, retry count, and delay between attempts.
  - [ ] Uses `setTimeout` and recursion to retry failed Promises.
- [ ] Implement retries (up to three attempts) for all API calls before giving up.
      <br>
      <br>
      <br>

# Activity: Using Promises to Simulate API Requests

### Time: 30 minutes

### Instructions:

- [x] Create a file called apiSimulator.ts.
- [x] Implement three functions that simulate API requests using Promises:
- [x] getProductDetails should simulate fetching product details (e.g., name, price).
- [x] getProductReviews should simulate fetching reviews for a product.
- [x] getRelatedProducts should simulate fetching related products.
- [x] Chain these Promises together to display product details, reviews, and related products in the console.

### Critical Thinking: How does chaining Promises help keep the code organized? What challenges might you face when dealing with complex chains of Promises?

Chaining Promises helps keep code organized because it lets you run tasks one after another in a clear order, instead of nesting a bunch of callbacks. But when the chain gets really long, it can be hard to read, and if one part breaks, it can be tricky to figure out where the problem started.
