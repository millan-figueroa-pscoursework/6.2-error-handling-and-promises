// 1. Implement a series of functions using Promises that simulate fetching:
// fetchUserData (user information)
// fetchOrderHistory(order history for a user)
// fetchOrderDetails(detailed information for a specific order)

// 2. Chain these Promises together to simulate a user logging in, viewing order history, and clicking an order to see details.
// 3. Implement error handling for each step to handle potential issues(e.g., user data not found).

function fetchUserData(userId: number) {
  return new Promise((resolve, reject) => {
    console.log('Fetching user data...');

    setTimeout(() => {
      // Mock data
      const mockUserData = {
        id: userId,
        name: "John Doe",
        email: "john.doe@example.com",
      };
      if (!userId) {
        reject("Error: Invalid user ID");
      } else {
        resolve(mockUserData);
      }
    }, 2000);
  });
}
function fetchOrderHistory(userId: number) {
  return new Promise((resolve, reject) => {
    console.log('Fetching order history...');

    setTimeout(() => {
      // Mock data
      const mockUserData = {
        id: userId,
        name: "John Doe",
        email: "john.doe@example.com",
      };
      if (!userId) {
        reject("Error: Invalid user ID");
      } else {
        resolve(mockUserData);
      }
    }, 2000);
  });
}
function fetchOrderDetails(userId: number) {
  return new Promise((resolve, reject) => {
    console.log('Fetching order details...');

    setTimeout(() => {
      // Mock data
      const mockUserData = {
        id: userId,
        name: "John Doe",
        email: "john.doe@example.com",
      };
      if (!userId) {
        reject("Error: Invalid user ID");
      } else {
        resolve(mockUserData);
      }
    }, 2000);
  });
}

fetchUserData(1)
  .then((data) => {
    console.log("User data fetched:", data);
  })
  .catch((error) => {
    console.error(error);
  });

fetchOrderHistory(1)
  .then((data) => {
    console.log("User data fetched:", data);
  })
  .catch((error) => {
    console.error(error);
  });

fetchOrderDetails(1)
  .then((data) => {
    console.log("User data fetched:", data);
  })
  .catch((error) => {
    console.error(error);
  });