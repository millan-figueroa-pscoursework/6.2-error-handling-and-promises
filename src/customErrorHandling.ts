interface Order {
    productId: string;
    quantity: number;
    price: number;
}

class ValidationError extends Error {
    name: string
    constructor(message: string) {
        super(message);
        this.name = 'ValidationError';
    }
}

class PaymentError extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'PaymentError';
    }
}

function handleOrder(order: Order) {
    if (order.quantity < 1) {
        // Throws a ValidationError if quantity is less than 1.
        throw new ValidationError('Quantity must be greater than 0.');
    }

    if (order.price < 0) {
        // Throws a PaymentError if price is not a positive number.
        throw new PaymentError('Price must be a positive number.');
    }

    console.log(`Order was processed successfully.`);

}
handleOrder({
    productId: '1',
    quantity: 2,
    price: 12.25
})