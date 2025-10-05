<template>
    <div class="admin-container">
        <aside class="sidebar">
            <h2>Admin</h2>
            <ul>
                <li @click="view = 'products'">Manage Products</li>
                <li @click="view = 'orders'">Manage Orders</li>
            </ul>
        </aside>
        <main class="content">
            <div v-if="view === 'products'">
                <h3>Products</h3>
                <button class="add-btn">+ Add Product</button>
                <ul>
                    <li v-for="p in products" :key="p.id">{{ p.name }} - ${{ p.price }}</li>
                </ul>
            </div>
            <div v-else>
                <h3>Orders</h3>
                <ul>
                    <li v-for="o in orders" :key="o.id">Order #{{ o.id }} - {{ o.status }}</li>
                </ul>
            </div>
        </main>
    </div>
</template>

<script>
export default {
    name: "Admin",
    data() {
        return {
            view: "products",
            products: [
                { id: 1, name: "Laptop", price: 1200 },
                { id: 2, name: "Shoes", price: 80 }
            ],
            orders: [
                { id: 101, status: "Pending" },
                { id: 102, status: "Shipped" }
            ]
        };
    }
};
</script>

<style>
.admin-container {
    display: flex;
    height: 100vh;
}

.sidebar {
    background: #ff0000;
    color: white;
    width: 200px;
    padding: 20px;
}

.sidebar h2 {
    margin-bottom: 20px;
}

.sidebar ul {
    list-style: none;
    padding: 0;
}

.sidebar li {
    margin: 15px 0;
    cursor: pointer;
    transition: 0.3s;
}

.sidebar li:hover {
    color: yellow;
}

.content {
    flex: 1;
    padding: 30px;
    background: #f9f9f9;
    animation: fadeIn 0.8s ease;
}

.add-btn {
    background: #ff0000;
    color: white;
    border: none;
    padding: 10px 15px;
    border-radius: 8px;
    margin-bottom: 15px;
    cursor: pointer;
}

.add-btn:hover {
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
