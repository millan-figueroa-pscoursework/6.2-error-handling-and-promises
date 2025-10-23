import './style.css'
// import { handleOrder } from './customErrorHandling';
import { fetchUserData, fetchOrderHistory, fetchOrderDetails } from './dataFetcher.ts'


document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>Error handling and promises</h1>
  </div>
`


// const order1 = { productId: "A1", quantity: 1, price: 20 };   // invalid quantity
// const order2 = { productId: "B2", quantity: 2, price: -5 };   // invalid price
// const order3 = { productId: "C3", quantity: 3, price: 100 };  // valid

// console.log(handleOrder(order1));
// console.log(handleOrder(order2));
// console.log(handleOrder(order3));

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