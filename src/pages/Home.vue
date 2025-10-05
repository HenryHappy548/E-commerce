<template>
    <div class="home">
        <header class="navbar">
            <div class="left">
                <h1 class="logo" @click="$router.push('/')">ShopTube</h1>
                <input v-model="query" @input="filter" placeholder="Search products..." class="search" />
            </div>
            <div class="right">
                <router-link to="/wishlist" class="icon">❤ <span v-if="wishlistCount">({{ wishlistCount
                        }})</span></router-link>
                <router-link to="/cart" class="icon">🛒 <span v-if="cartCount">({{ cartCount }})</span></router-link>
                <router-link to="/login" class="btn">Login</router-link>
                <router-link to="/checkout" class="btn" >Checkout</router-link>
                <router-link to="/admin" class="btn">Admin</router-link>
            </div>
        </header>

        <nav class="category-bar">
            <button v-for="cat in ['All', ...categories]" :key="cat" :class="{ active: active === cat }"
                @click="select(cat)">{{ cat }}</button>
        </nav>

        <main>
            <section class="hero">
                <h2>Trending Products</h2>
                <p>Explore curated items — animated cards and smooth browsing.</p>
            </section>

            <section class="grid">
                <transition-group name="list" tag="div" class="cards">
                    <article v-for="p in visible" :key="p.id" class="card" @click="$router.push('/product/' + p.id)">
                        <div class="thumb-wrap">
                            <img :src="p.image" :alt="p.name" class="thumb" />
                            <button class="wish" @click.stop="toggleWishlist(p)">{{ isWish(p) ? '✓' : '♡' }}</button>
                        </div>
                        <div class="meta">
                            <h3>{{ p.name }}</h3>
                            <p class="price">${{ p.price }}</p>
                            <div class="actions">
                                <button @click.stop="addToCart(p)">Add to cart</button>
                                <button class="ghost" @click.stop="$router.push('/product/' + p.id)">View</button>
                            </div>
                        </div>
                    </article>
                </transition-group>
            </section>
        </main>
    </div>
</template>

<script>
export default {
    name: "Home",
    data() {
        return {
            query: "",
            categories: ["Electronics", "Fashion", "Books", "Toys"],
            active: "All",
            products: [
                { id: 1, name: "Wireless Headphones", price: 59, category: "Electronics", image: "https://via.placeholder.com/400x250?text=Headphones" },
                { id: 2, name: "Running Shoes", price: 79, category: "Fashion", image: "https://via.placeholder.com/400x250?text=Shoes" },
                { id: 3, name: "Coding Book", price: 24, category: "Books", image: "https://via.placeholder.com/400x250?text=Book" },
                { id: 4, name: "Toy Robot", price: 39, category: "Toys", image: "https://via.placeholder.com/400x250?text=Robot" },
                { id: 5, name: "Laptop 14\"", price: 999, category: "Electronics", image: "https://via.placeholder.com/400x250?text=Laptop" },
                { id: 6, name: "sport shoes", price: 20, category: "Fashion", image: "IMG_20250925_211251_215.jpg"},
            ],
            visible: []
        };
    },
    computed: {
        cartCount() { return (JSON.parse(localStorage.getItem('cart') || '[]')).reduce((s, i) => s + i.qty, 0); },
        wishlistCount() { return (JSON.parse(localStorage.getItem('wishlist') || '[]')).length; }
    },
    created() {
        this.visible = this.products;
    },
    methods: {
        select(cat) {
            this.active = cat;
            this.filter();
        },
        filter() {
            const q = this.query.trim().toLowerCase();
            this.visible = this.products.filter(p => {
                const catOk = this.active === 'All' ? true : p.category === this.active;
                const qOk = q ? (p.name.toLowerCase().includes(q) || p.category.toLowerCase().includes(q)) : true;
                return catOk && qOk;
            });
        },
        addToCart(p) {
            const cart = JSON.parse(localStorage.getItem('cart') || '[]');
            const found = cart.find(i => i.id === p.id);
            if (found) found.qty++;
            else cart.push({ id: p.id, name: p.name, price: p.price, image: p.image, qty: 1 });
            localStorage.setItem('cart', JSON.stringify(cart));
            this.$forceUpdate();
            this.animateFlash(p.id);
        },
        toggleWishlist(p) {
            const w = JSON.parse(localStorage.getItem('wishlist') || '[]');
            const exists = w.find(i => i.id === p.id);
            if (exists) {
                localStorage.setItem('wishlist', JSON.stringify(w.filter(i => i.id !== p.id)));
            } else {
                w.push({ id: p.id, name: p.name, price: p.price, image: p.image });
                localStorage.setItem('wishlist', JSON.stringify(w));
            }
            this.$forceUpdate();
        },
        isWish(p) {
            return !!(JSON.parse(localStorage.getItem('wishlist') || '[]')).find(i => i.id === p.id);
        },
        animateFlash(id) {
            // small pulse on action — just re-render is enough for the simple demo
        }
    }
}
</script>

<style>
/* layout */
:root {
    --accent: #ef4444;
    --shadow: 0 8px 30px rgba(2, 6, 23, 0.08);
}

.home {
    min-height: 100vh;
    background: linear-gradient(180deg, #f7f7f9 0%, #fff 100%);
}

.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 14px 22px;
    background: #fff;
    border-bottom: 1px solid #eee;
    position: sticky;
    top: 0;
    z-index: 20
}

.left {
    display: flex;
    gap: 12px;
    align-items: center
}

.logo {
    color: var(--accent);
    font-weight: 700;
    cursor: pointer
}

.search {
    padding: 8px 12px;
    border-radius: 999px;
    border: 1px solid #e4e4e7;
    width: 360px;
    outline: none;
    transition: box-shadow .25s
}

.search:focus {
    box-shadow: 0 8px 30px rgba(14, 165, 233, 0.12)
}

.right {
    display: flex;
    align-items: center;
    gap: 10px
}

.icon {
    margin-right: 6px;
    text-decoration: none;
    color: #111
}

.btn {
    background: var(--accent);
    color: white;
    padding: 8px 12px;
    border-radius: 8px;
    text-decoration: none
}

/* categories */
.category-bar {
    display: flex;
    gap: 10px;
    padding: 16px;
    justify-content: center
}

.category-bar button {
    background: transparent;
    border: 1px solid #eee;
    padding: 8px 14px;
    border-radius: 999px;
    cursor: pointer;
    background-color: green;
    font-size: larger;
    font-weight: 900;
    transition: all .25s
}

.category-bar .active {
    background: var(--accent);
    color: #fff;
    transform: translateY(-3px);
    box-shadow: var(--shadow)
}

/* hero */
.hero {
    padding: 22px;
    text-align: center
}

.grid {
    padding: 12px 22px
}

.cards {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
    gap: 18px
}

.card {
    background: #fff;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: var(--shadow);
    cursor: pointer;
    transform-origin: center;
    transition: transform .25s, box-shadow .25s
}

.card:hover {
    transform: translateY(-6px) scale(1.02);
    box-shadow: 0 20px 40px rgba(2, 6, 23, 0.12)
}

.thumb-wrap {
    position: relative
}

.thumb {
    width: 100%;
    height: 160px;
    object-fit: cover;
    display: block
}

.wish {
    position: absolute;
    right: 10px;
    top: 10px;
    background: rgba(255, 255, 255, 0.9);
    border: none;
    padding: 6px 8px;
    border-radius: 8px;
    cursor: pointer;
    box-shadow: 0 6px 18px rgba(2, 6, 23, 0.06)
}

/* meta */
.meta {
    padding: 12px
}

.meta h3 {
    margin: 0 0 6px;
    font-size: 16px
}

.price {
    color: var(--accent);
    font-weight: 700
}

.actions {
    display: flex;
    gap: 8px;
    margin-top: 10px
}

.actions button {
    padding: 8px 10px;
    border-radius: 8px;
    border: none;
    cursor: pointer
}

.actions .ghost {
    background: transparent;
    color: rgb(4, 205, 4);
    border: 1px solid #eee
}

/* list transitions */
.list-enter-active,
.list-leave-active {
    transition: all .35s cubic-bezier(.2, .9, .2, 1)
}

.list-enter-from {
    opacity: 0;
    transform: translateY(8px) scale(.98)
}

.list-enter-to {
    opacity: 1;
    transform: translateY(0) scale(1)
}

.list-leave-to {
    opacity: 0;
    transform: translateY(-8px) scale(.98)
}
</style>
