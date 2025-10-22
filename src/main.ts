import './style.css'
import { handleOrder, processOrder } from './customErrorHandling';


document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>Error handling and promises</h1>
  </div>
`


const order1 = { productId: "A1", quantity: 1, price: 20 };   // invalid quantity
const order2 = { productId: "B2", quantity: 2, price: -5 };   // invalid price
const order3 = { productId: "C3", quantity: 3, price: 100 };  // valid

console.log(handleOrder(order1));
console.log(handleOrder(order2));
console.log(handleOrder(order3));