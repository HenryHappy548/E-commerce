<template>
    <transition name="slide">
        <aside v-if="isOpen" class="sidebar">
            <button class="close-btn" @click="toggleSidebar">✖</button>
            <ul>
                <li @click="$router.push('/')">🏠 Home</li>
                <li @click="$router.push('/trending')">🔥 Trending</li>
                <li @click="$router.push('/subscriptions')">📺 Subscriptions</li>
                <li @click="$router.push('/wishlist')">❤️ Wishlist</li>
                <li @click="$router.push('/cart')">🛒 Cart</li>
                <li @click="$router.push('/login')">🔑 Login</li>
                <li @click="$router.push('/signup')">📝 Signup</li>
                
            </ul>
        </aside>
    </transition>
</template>

<script>
export default {
    name: "Sidebar",
    props: ["isOpen"],
    methods: {
        toggleSidebar() {
            this.$emit("toggle");
        }
    }
};
</script>

<style>
.sidebar {
    position: fixed;
    left: 0;
    top: 0;
    height: 100%;
    width: 250px;
    background: rgb(0, 51, 179);
    box-shadow: 2px 0 8px rgba(0, 0, 0, 0.2);
    padding: 20px;
    z-index: 1200;
    color: white;
    font-weight: 900;
    font-size: 10rem;
    gap: 90px;
}

.sidebar ul {
    list-style: none;
    padding: 0;
    margin-top: 40px;
}

.sidebar ul li {
    padding: 12px;
    font-size: 16px;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 10px;
    transition: all 0.3s ease;
    border-radius: 6px;
}

.sidebar ul li:hover {
    background: #f9f9f9;
    transform: translateX(8px);
    /* slide effect */
    color: #ff0000;
    /* YouTube-like highlight */
}

.close-btn {
    background: transparent;
    border: none;
    font-size: 20px;
    cursor: pointer;
    float: right;
}

/* Slide animation */
.slide-enter-from {
    transform: translateX(-100%);
}

.slide-enter-to {
    transform: translateX(0);
}

.slide-leave-from {
    transform: translateX(0);
}

.slide-leave-to {
    transform: translateX(-100%);
}

.slide-enter-active,
.slide-leave-active {
    transition: transform 0.3s ease-in-out;
}
</style>
