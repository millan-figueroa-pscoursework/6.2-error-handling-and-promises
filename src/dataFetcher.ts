// 1. Implement a series of functions using Promises that simulate fetching:
// fetchUserData (user information)
// fetchOrderHistory(order history for a user)
// fetchOrderDetails(detailed information for a specific order)

// 2. Chain these Promises together to simulate a user logging in, viewing order history, and clicking an order to see details.
// 3. Implement error handling for each step to handle potential issues(e.g., user data not found).

// Types for clarity
// type User = { id: number; name: string; email: string };
// type OrderSummary = { id: string; date: string; total: number };
// type OrderDetail = OrderSummary & {
//   items: { sku: string; name: string; qty: number; price: number }[];
//   shippingAddress: string;
// };

// // 1) Promise-based mock APIs
// function fetchUserData(userId: number): Promise<User> {
//   console.log("Fetching user data...");
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (!userId || userId <= 0) {
//         reject(new Error("Error: Invalid user ID"));
//         return;
//       }
//       // Simulate "user not found"
//       if (userId === 404) {
//         reject(new Error("Error: User not found"));
//         return;
//       }
//       resolve({ id: userId, name: "John Doe", email: "john.doe@example.com" });
//     }, 600);
//   });
// }

// function fetchOrderHistory(userId: number): Promise<OrderSummary[]> {
//   console.log("Fetching order history...");
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (!userId || userId <= 0) {
//         reject(new Error("Error: Invalid user ID for order history"));
//         return;
//       }
//       // Simulate empty history
//       if (userId === 204) {
//         resolve([]);
//         return;
//       }
//       // Mock some orders
//       resolve([
//         { id: "ord_1001", date: "2025-05-01", total: 129.99 },
//         { id: "ord_1002", date: "2025-06-15", total: 42.5 },
//       ]);
//     }, 700);
//   });
// }

// function fetchOrderDetails(orderId: string): Promise<OrderDetail> {
//   console.log("Fetching order details...");
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (!orderId) {
//         reject(new Error("Error: Invalid order ID"));
//         return;
//       }
//       // Simulate missing order
//       if (orderId === "missing") {
//         reject(new Error("Error: Order not found"));
//         return;
//       }
//       resolve({
//         id: orderId,
//         date: "2025-05-01",
//         total: 129.99,
//         shippingAddress: "123 Main St, Springfield, USA",
//         items: [
//           { sku: "A-001", name: "Wireless Mouse", qty: 1, price: 29.99 },
//           { sku: "B-123", name: "Mechanical Keyboard", qty: 1, price: 100.0 },
//         ],
//       });
//     }, 800);
//   });
// }

// // 2) CHAIN: login -> history -> first order -> details
// fetchUserData(1)
//   .then((user) => {
//     console.log("User data fetched:", user);
//     return fetchOrderHistory(user.id).catch((err) => {
//       console.error("Order history failed:", err.message);
//       // Re-throw to stop the chain (or return [] to continue gracefully)
//       throw err;
//     });
//   })
//   .then((orders) => {
//     console.log("Order history fetched:", orders);
//     if (!orders.length) {
//       // 3) Step-level error handling for "no orders"
//       throw new Error("No orders found for this user.");
//     }
//     const firstOrder = orders[0];
//     return fetchOrderDetails(firstOrder.id).catch((err) => {
//       console.error("Order details failed:", err.message);
//       throw err;
//     });
//   })
//   .then((details) => {
//     console.log("Order details fetched:", details);
//   })
//   .catch((err) => {
//     console.error("Flow failed:", err.message);
//   });

// // --- Optional: the same flow using async/await with per-step try/catch ---
// async function runFlow(userId: number) {
//   try {
//     const user = await fetchUserData(userId);
//     console.log("User data fetched:", user);

//     let orders: OrderSummary[];
//     try {
//       orders = await fetchOrderHistory(user.id);
//       console.log("Order history fetched:", orders);
//     } catch (e: any) {
//       console.error("Order history failed:", e.message);
//       return; // stop here if history fails
//     }

//     if (!orders.length) {
//       console.warn("No orders found for this user.");
//       return;
//     }

//     try {
//       const details = await fetchOrderDetails(orders[0].id);
//       console.log("Order details fetched:", details);
//     } catch (e: any) {
//       console.error("Order details failed:", e.message);
//     }
//   } catch (e: any) {
//     console.error("Login/user fetch failed:", e.message);
//   }
// }

// runFlow(1);

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





