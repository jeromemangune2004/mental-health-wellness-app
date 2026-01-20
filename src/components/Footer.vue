<template>
  <footer class="footer">
    <p>&copy; 2026 Mental Health & Wellness Companion</p>
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/breathing">Breathing</router-link> |
      <router-link to="/wellness">Wellness</router-link> |
      <router-link to="/ai-support">AI Support</router-link>
    </nav>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
}
</script>

<style scoped>
.footer {
  background-color: #2c3e50;
  color: #fff;
  text-align: center;
  padding: 1rem;
  margin-top: 2rem;
}
.footer nav {
  margin-top: 0.5rem;
}
.footer a {
  color: #fff;
  text-decoration: none;
  margin: 0 0.5rem;
}
.footer a.router-link-active {
  font-weight: bold;
}
</style>