<template>
    <div class="signup-container">
        <div class="signup-box">
            <h2 class="title">Create Account</h2>
            <form @submit.prevent="handleSignup">
                <input v-model="name" type="text" placeholder="Full Name" required />
                <input v-model="email" type="email" placeholder="Email" required />
                <input v-model="password" type="password" placeholder="Password" required />
                <button type="submit" class="btn">Sign Up</button>
            </form>
            <p class="login-link">
                Already have an account?
                <router-link to="/login">Login</router-link>
            </p>
        </div>
    </div>
</template>

<script>
export default {
    name: "Signup",
    data() {
        return { name: "", email: "", password: "" };
    },
    methods: {
        handleSignup() {
            alert(`Account created for ${this.name}`);
            this.$router.push("/login");
        }
    }
};
</script>

<style>
.signup-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background: linear-gradient(135deg, #ff0000, #ff7f50);
}

.signup-box {
    background: white;
    padding: 40px;
    border-radius: 16px;
    width: 350px;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
    animation: slideIn 0.8s ease;
}

.title {
    text-align: center;
    color: #ff0000;
    margin-bottom: 20px;
}

input {
    width: 100%;
    padding: 12px;
    margin: 10px 0;
    border: 1px solid #ddd;
    border-radius: 8px;
}

input:focus {
    border-color: #ff0000;
    outline: none;
}

.btn {
    width: 100%;
    background: #ff0000;
    color: white;
    border: none;
    padding: 12px;
    border-radius: 8px;
    margin-top: 10px;
    cursor: pointer;
    transition: 0.3s;
}

.btn:hover {
    background: #cc0000;
}

.login-link {
    text-align: center;
    margin-top: 15px;
}

.login-link a {
    color: #ff0000;
    text-decoration: none;
}

@keyframes slideIn {
    from {
        transform: translateY(-40px);
        opacity: 0;
    }

    to {
        transform: translateY(0);
        opacity: 1;
    }
}
</style>
