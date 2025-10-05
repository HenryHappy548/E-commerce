<template>
    <div class="login-container">
        <div class="login-box">
            <h2 class="title">Welcome Back</h2>
            <form @submit.prevent="handleLogin">
                <input v-model="email" type="email" placeholder="Email" required />
                <input v-model="password" type="password" placeholder="Password" required />
                <button type="submit" class="btn">Login</button>
            </form>
            <p class="signup-link">
                Don’t have an account?
                <router-link to="/signup">Sign up</router-link>
            </p>
        </div>
    </div>
</template>

<script>
export default {
    name: "Login",
    data() {
        return {
            email: "",
            password: ""
        };
    },
    methods: {
        handleLogin() {
            alert(`Logging in with ${this.email}`);
            this.$router.push("/");
        }
    }
};
</script>

<style>
.login-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background: linear-gradient(135deg, #ff0000, #ff7f50);
    animation: fadeIn 1.2s ease;
}

.login-box {
    background: white;
    padding: 40px;
    border-radius: 16px;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
    width: 350px;
    text-align: center;
    animation: slideUp 0.8s ease;
}

.title {
    margin-bottom: 20px;
    color: #ff0000;
}

input {
    width: 100%;
    padding: 12px;
    margin: 10px 0;
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
    padding: 12px;
    border-radius: 8px;
    width: 100%;
    margin-top: 10px;
    cursor: pointer;
    transition: 0.3s;
}

.btn:hover {
    background: #cc0000;
}

.signup-link {
    margin-top: 15px;
}

.signup-link a {
    color: #ff0000;
    text-decoration: none;
}

@keyframes fadeIn {
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}

@keyframes slideUp {
    from {
        transform: translateY(50px);
        opacity: 0;
    }

    to {
        transform: translateY(0);
        opacity: 1;
    }
}
</style>
