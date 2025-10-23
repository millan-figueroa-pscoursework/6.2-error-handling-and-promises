interface Order {
    productId: string,
    quantity: number,
    price: number
}

// Error classes should only define what the error type looks like, not perform logic or throw anything themselves.
// Custom error for invalid quantities, missing fields, etc.
class ValidationError extends Error {
    constructor(message: string) {
        super(message); // call the built-in Error constructor
        this.name = "ValidationError";
    }
}

// Custom error for invalid payments (like negative prices)
class PaymentError extends Error {
    constructor(message: string) {
        super(message); // call the built-in Error constructor
        this.name = "PyamentError";
    }
}

// Function that checks the order and throws errors if needed
export function processOrder(order: Order): void {
    // Takes an order object with properties: productId, quantity, and price.
    // Throws a ValidationError if quantity is less than 1.
    if (order.quantity < 1) {
        throw new ValidationError("Quantity must be more than 1.");
    }
    // Throws a PaymentError if price is not a positive number.
    if (order.price <= 0) {
        throw new PaymentError("Price must be a positive number.");
    }
}


// Function that handles errors from processOrder
export function handleOrder(order: Order): void {
    try {
        // should call processOrder inside a try...catch block and log any errors that occur.
        processOrder(order)
    } catch (error) {
        if (error instanceof ValidationError) {
            console.error("Validation Error:", error.message);
        } else if (error instanceof PaymentError) {
            console.error("Payment Error:", error.message);
        } else {
            console.error("Unknown Error:", (error as Error).message);
        }
    }
}

