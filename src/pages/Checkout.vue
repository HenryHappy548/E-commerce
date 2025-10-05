<template>
    <div class="checkout-container">
        <h2 class="title">Checkout</h2>
        <div class="checkout-box">
            <form @submit.prevent="placeOrder">
                <h3>Shipping Information</h3>
                <input v-model="name" type="text" placeholder="Full Name" required />
                <input v-model="address" type="text" placeholder="Address" required />
                <input v-model="city" type="text" placeholder="City" required />
                <input v-model="zip" type="text" placeholder="ZIP Code" required />

                <h3>Payment Information</h3>
                <input v-model="cardNumber" type="text" placeholder="Card Number" required />
                <input v-model="expiry" type="text" placeholder="MM/YY" required />
                <input v-model="cvv" type="text" placeholder="CVV" required />

                <button type="submit" class="btn">Place Order</button>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    name: "Checkout",
    data() {
        return {
            name: "",
            address: "",
            city: "",
            zip: "",
            cardNumber: "",
            expiry: "",
            cvv: ""
        };
    },
    methods: {
        placeOrder() {
            alert("Order placed successfully!");
            this.$router.push("/");
        }
    }
};
</script>

<style>
.checkout-container {
    max-width: 600px;
    margin: 40px auto;
    background: white;
    padding: 30px;
    border-radius: 16px;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
    animation: fadeIn 1s ease;
}

.title {
    text-align: center;
    color: #ff0000;
    margin-bottom: 20px;
}

.checkout-box h3 {
    margin-top: 20px;
    color: #444;
}

input {
    width: 100%;
    padding: 12px;
    margin: 8px 0;
    border: 1px solid #ddd;
    border-radius: 8px;
    transition: 0.3s;
}

input:focus {
    border-color: #ff0000;
    outline: none;
}

.btn {
    background: #ff0000;
    color: white;
    border: none;
    padding: 14px;
    border-radius: 8px;
    width: 100%;
    margin-top: 20px;
    cursor: pointer;
    font-weight: bold;
    transition: 0.3s;
}

.btn:hover {
    background: #cc0000;
}

@keyframes fadeIn {
    from {
        opacity: 0;
        transform: scale(0.9);
    }

    to {
        opacity: 1;
        transform: scale(1);
    }
}
</style>
