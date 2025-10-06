<template>
    <footer class="footer">
        <p>© 2025 ShopTube. All rights reserved.</p>
        <div class="links">
            <a href="https://accounts.google.com/b/0/AddMailService">Gmail</a>
            <a href="#">Terms of Service</a>
            <a href="#">Contact</a>
        </div>
    </footer>
</template>

<script>
export default { name: "Footer" };
</script>

<style>
.footer {
    background: linear-gradient(180deg, #1111f0 0%, #19141431 100%);
    color: white;
    padding: 20px;
    text-align: center;
    margin-top: 40px;
}

.links {
    margin-top: 10px;
}

.links a {
    margin: 0 10px;
    text-decoration: none;
    color: #ddd;
    transition: 0.3s;
}

.links a:hover {
    color: #ff0000;
}
</style>

