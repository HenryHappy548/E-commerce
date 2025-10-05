<template>
    <div class="cart-container">
        <h2>Your Cart</h2>
        <div v-if="cart.length" class="cart-items">
            <div v-for="item in cart" :key="item.id" class="cart-item">
                <img :src="item.image" />
                <div>
                    <h3>{{ item.name }}</h3>
                    <p>${{ item.price }}</p>
                </div>
                <button @click="removeItem(item.id)">Remove</button>
            </div>
            <button class="checkout-btn" @click="$router.push('/checkout')">Proceed to Checkout</button>
        </div>
        <p v-else>Your cart is empty.</p>
    </div>
</template>

<script>
export default {
    name: "Cart",
    data() {
        return {
            cart: [
                { id: 1, name: "Laptop", price: 1200, image: "https://via.placeholder.com/100" },
                { id: 2, name: "Shoes", price: 80, image: "https://via.placeholder.com/100" }
            ]
        };
    },
    methods: {
        removeItem(id) {
            this.cart = this.cart.filter(item => item.id !== id);
        }
    }
};
</script>

<style>
.cart-container {
    max-width: 700px;
    margin: 40px auto;
    background: white;
    padding: 30px;
    border-radius: 16px;
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
    animation: fadeIn 0.8s ease;
}

.cart-item {
    display: flex;
    align-items: center;
    gap: 15px;
    padding: 10px 0;
    border-bottom: 1px solid #eee;
}

.cart-item img {
    width: 80px;
    border-radius: 8px;
}

button {
    background: #ff0000;
    color: white;
    border: none;
    padding: 10px 15px;
    border-radius: 8px;
    cursor: pointer;
    transition: 0.3s;
}

button:hover {
    background: #cc0000;
}

.checkout-btn {
    margin-top: 20px;
    width: 100%;
}

@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(20px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}
</style>
