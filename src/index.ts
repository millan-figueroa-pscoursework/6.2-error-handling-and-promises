import './style.css'
// import { handleOrder } from './customErrorHandling';
import { fetchUserData, fetchOrderHistory, fetchOrderDetails } from './dataFetcher.ts'
import { fetchProductCatalog, fetchProductReviews, fetchSalesReport } from './apiSimulator.ts';


document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>Lab 6.2: Promises and Error Handling Challenge</h1>
  </div>
`


// ****************************************
// Promise-Based Data Fetcher

fetchUserData(1)
  .then((data) => {
    console.log("User data fetched:", data);
  })
  .catch((error) => {
    console.error(error);
  });

fetchOrderHistory(4)
  .then((data) => {
    console.log("Order history fetched:", data);
  })
  .catch((error) => {
    console.error(error);
  });

fetchOrderDetails(1)
  .then((data) => {
    console.log("Order details fetched:", data);
  })
  .catch((error) => {
    console.error(error);
  });

//****************************************** */
// Promises and Error Handling Challenge

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