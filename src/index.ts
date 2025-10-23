import './style.css'
// import { handleOrder } from './customErrorHandling';
import { fetchUserData, fetchOrderHistory, fetchOrderDetails } from './dataFetcher.ts'
import { fetchProductCatalog, fetchProductReviews, fetchSalesReport } from './apiSimulator.ts';


document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>Lab 6.2: Promises and Error Handling Challenge</h1>
  </div>
`

// Custom Error Handling Tests
// const order1 = { productId: "A1", quantity: 1, price: 20 };   // invalid quantity
// const order2 = { productId: "B2", quantity: 2, price: -5 };   // invalid price
// const order3 = { productId: "C3", quantity: 3, price: 100 };  // valid

// console.log(handleOrder(order1));
// console.log(handleOrder(order2));
// console.log(handleOrder(order3));

// ****************************************
// Promises and Error Handling Challenge
// fetchUserData(1)
//   .then((data) => {
//     console.log("User data fetched:", data);
//   })
//   .catch((error) => {
//     console.error(error);
//   });

// fetchOrderHistory(4)
//   .then((data) => {
//     console.log("Order history fetched:", data);
//   })
//   .catch((error) => {
//     console.error(error);
//   });

// fetchOrderDetails(1)
//   .then((data) => {
//     console.log("Order details fetched:", data);
//   })
//   .catch((error) => {
//     console.error(error);
//   });

//****************************************** */

fetchProductCatalog(1)
  .then((data) => {
    console.log("Product catalog fetched:", data);
  })
  .catch((error) => {
    console.error(error);
  });

fetchProductReviews('Alice Johnson')
  .then((data) => {
    console.log("Product reviews fetched:", data);
  })
  .catch((error) => {
    console.error(error);
  });

fetchSalesReport(101)
  .then((data) => {
    console.log("Sales report fetched:", data);
  })
  .catch((error) => {
    console.error(error);
  });