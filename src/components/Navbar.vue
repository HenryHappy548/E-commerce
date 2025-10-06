<template>
  <header class="navbar">
    <button class="menu-btn" @click="toggleSidebar">☰</button>
    <div class="logo" @click="$router.push('/')">ShopTube</div>

    <div class="search-box">
      <input type="text" placeholder="Search products..." v-model="searchQuery" />
      <button @click="search">🔍</button>
    </div>

    <nav>
      <router-link to="/login">Login</router-link>
      <router-link to="/signup">Signup</router-link>
    </nav>

    <!-- Sidebar -->
    <Sidebar :isOpen="sidebarOpen" @toggle="toggleSidebar" />

    <!-- Overlay -->
    <div v-if="sidebarOpen" class="overlay" @click="toggleSidebar"></div>
  </header>
</template>

<script>
import Sidebar from "./Sidebar.vue";

export default {
  name: "Navbar",
  components: { Sidebar },
  data() {
    return {
      searchQuery: "",
      sidebarOpen: false
    };
  },
  methods: {
    search() {
      if (this.searchQuery.trim()) {
        alert(`Searching for: ${this.searchQuery}`);
      }
    },
    toggleSidebar() {
      this.sidebarOpen = !this.sidebarOpen;
    }
  }
};
</script>

<style>
.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: white;
  padding: 10px 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 1000;
}

.logo {
  font-size: 22px;
  font-weight: bold;
  color: #06911f;
  cursor: pointer;
}

.menu-btn {
  font-size: 22px;
  background: none;
  border: none;
  color: black;
  cursor: pointer;
  margin-right: 10px;
}


.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(2px);
  z-index: 1100;
  animation: fadeIn 0.3s ease-in-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}
</style>
