import { NetworkError, DataError } from './errorClasses.ts';
// Promises and Error Handling Challenge

// Types for clarity
type Catalog = { id: number; name: string; price: number }[];
type ProductReview = {
    reviewerName: string;
    rating: number;
    comment: string;
}[];
type SalesReport = {
    reportId: number;
    date: string;
    totalSales: number;
    totalOrders: number;
    topProduct: string;
};

export const fetchProductCatalog = (productId: number): Promise<Catalog> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.8) {
                resolve([
                    { id: 1, name: "Laptop", price: 1200 },
                    { id: 2, name: "Wireless Noise-Cancelling Headphones", price: 200 },
                ]);
            } else {
                reject(new DataError("Product data is missing required fields"));
            }
        }, 1000);
    });
};


export const fetchProductReviews = (name: string): Promise<ProductReview> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.8) {
                resolve([
                    {
                        reviewerName: "Alice Johnson",
                        rating: 5,
                        comment: "Excellent quality and fast shipping!",
                    }]);
            } else {
                reject(new NetworkError("Failed to fetch product reviews (network issue)"));
            }
        }, 1000);
    });
};


export const fetchSalesReport = (reportId: number): Promise<SalesReport> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.8) {
                resolve({
                    reportId: 101,
                    date: "2025-10-23",
                    totalSales: 15890.75,
                    totalOrders: 327,
                    topProduct: "Wireless Noise-Cancelling Headphones",
                });
            } else {
                reject(new NetworkError("Failed to fetch sales report (network issue)"));
            }
        }, 1000);
    });
};