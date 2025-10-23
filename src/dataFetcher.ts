//*** Building a Promise-Based Data Fetcher from Module 6: TypeScript and Advanced JavaScript  */

// 1. Implement a series of functions using Promises that simulate fetching:
// fetchUserData (user information)
// fetchOrderHistory(order history for a user)
// fetchOrderDetails(detailed information for a specific order)

// 2. Chain these Promises together to simulate a user logging in, viewing order history, and clicking an order to see details.
// 3. Implement error handling for each step to handle potential issues(e.g., user data not found).


// Types for clarity
type User = { id: number; name: string; email: string };
type OrderSummary = { id: number; date: string; total: number };
type OrderDetails = {
  items: { sku: number; name: string; qty: number; price: number };
  shippingAddress: string;
};

// Fetch User Data
export function fetchUserData(userId: number): Promise<User> {
  console.log('Fetching user data...');
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Mock data
      const mockUserData = {
        id: userId,
        name: "John Doe",
        email: "john.doe@example.com",
      };

      if (!userId) {
        reject(new Error("Error: Invalid user ID"));
      } else {
        resolve(mockUserData);
      }
    }, 2000);
  });
}

// Fetch Order Data
export function fetchOrderHistory(orderId: number): Promise<OrderSummary> {
  console.log('Fetching order history...');
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Mock data
      const mockOrderData = {
        id: orderId,
        date: "10/13/25",
        total: 125,
      };
      if (!orderId) {
        reject("Error: Invalid user ID");
      } else {
        resolve(mockOrderData);
      }
    }, 2000);
  });
}

export function fetchOrderDetails(sku: number): Promise<OrderDetails> {
  return new Promise((resolve, reject) => {
    console.log('Fetching order details...');
    setTimeout(() => {
      // Mock data
      const mockOrderDetails = {
        sku: sku,
        items: { sku: 343, name: "guitar", qty: 1, price: 220 },
        shippingAddress: "213 Something St. Los Angeles, CA",
      };
      if (!sku) {
        reject("Error: Invalid order ID");
      } else {
        resolve(mockOrderDetails);
      }
    }, 2000);
  });
}





