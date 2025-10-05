<template>
    <div class="wishlist-container">
        <h2>Your Wishlist</h2>
        <div v-if="wishlist.length" class="wishlist-items">
            <div v-for="item in wishlist" :key="item.id" class="wishlist-item">
                <img :src="item.image" />
                <div>
                    <h3>{{ item.name }}</h3>
                    <p>${{ item.price }}</p>
                </div>
                <button @click="moveToCart(item)">Move to Cart</button>
            </div>
        </div>
        <p v-else>Your wishlist is empty.</p>
    </div>
</template>

<script>
export default {
    name: "Wishlist",
    data() {
        return {
            wishlist: [
                { id: 1, name: "Headphones", price: 100, image: "https://via.placeholder.com/100" }
            ]
        };
    },
    methods: {
        moveToCart(item) {
            alert(`${item.name} moved to cart`);
            this.wishlist = this.wishlist.filter(p => p.id !== item.id);
            this.$router.push("/cart");
        }
    }
};
</script>

<style>
.wishlist-container {
    max-width: 700px;
    margin: 40px auto;
    background: white;
    padding: 30px;
    border-radius: 16px;
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
    animation: fadeIn 0.8s ease;
}

.wishlist-item {
    display: flex;
    align-items: center;
    gap: 15px;
    padding: 10px 0;
    border-bottom: 1px solid #eee;
}

.wishlist-item img {
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
}

button:hover {
    background: #cc0000;
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
