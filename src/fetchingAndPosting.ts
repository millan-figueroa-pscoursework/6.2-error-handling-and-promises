// // Fetch Data

// // Use a GET request to fetch data from any free API you can find(make sure it includes good documentation!).
// // Display the fetched user data in the console.
// // Change Data

// // If the API you found allows it, make a PUT, PATCH, or DELETE request.
// // If not, continue searching for another option, or ask your colleagues for help.
// // As a fallback option, use the { JSON } Placeholder API.
// // Log the response from the server in the console.

// // Base URL: https://fakestoreapi.com/products

// const BASE_URL = 'https://fakestoreapi.com/products'

// async function fetchAllProducts() {
//     try {
//         //send the request to fetch the products
//         const products = await fetch('https://fakestoreapi.com/products')
//     }

//     //parse the data
//     const products = await response.json();
//     console.log(products);

//     } catch (e) {
//         console.error(e);
//     }


// async function getProduct(id: number) {
//     try {
//         const response = await fetch(`${BASE_URL}/products/${id}`);

//         const product = await response.json();
//         console.log(product);
//     } catch (e) {
//         console.error(e);
//     }
// }

// async function createProduct() {
//     try {
//         const response = await fetch(`${BASE_URL}/products`, {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json"
//             },
//             body: JSON.stringify({ title: "keyboard" })
//         });
//         if (!response.ok) {
//             throw new Error("Error creating product")
//         }

//         const product = await response.json();
//         console.log(product);
//     } catch (e) {
//         console.error(e);
//     }
// }
