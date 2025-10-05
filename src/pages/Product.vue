<template>
    <div class="product-container">
        <div class="product-card">
            <img :src="product.image" alt="Product" />
            <h2>{{ product.name }}</h2>
            <p class="price">${{ product.price }}</p>
            <p>{{ product.description }}</p>
            <div class="buttons">
                <button @click="addToCart">Add to Cart</button>
                <button @click="addToWishlist">Wishlist</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Product",
    data() {
        return {
            product: {
                id: this.$route.params.id,
                name: "Sample Product",
                price: 199,
                description: "This is a detailed product description.",
                image: "https://via.placeholder.com/300"
            }
        };
    },
    methods: {
        addToCart() {
            alert(`${this.product.name} added to cart`);
            this.$router.push("/cart");
        },
        addToWishlist() {
            alert(`${this.product.name} added to wishlist`);
            this.$router.push("/wishlist");
        }
    }
};
</script>

<style>
.product-container {
    display: flex;
    justify-content: center;
    padding: 40px;
    animation: fadeIn 1s ease;
}

.product-card {
    background: white;
    padding: 30px;
    border-radius: 16px;
    max-width: 500px;
    text-align: center;
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
}

.product-card img {
    width: 100%;
    border-radius: 12px;
}

.price {
    color: #ff0000;
    font-size: 20px;
    margin: 10px 0;
}

.buttons {
    display: flex;
    justify-content: center;
    gap: 15px;
    margin-top: 20px;
}

button {
    background: #ff0000;
    color: white;
    border: none;
    padding: 12px 20px;
    border-radius: 8px;
    cursor: pointer;
    transition: 0.3s;
}

button:hover {
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
