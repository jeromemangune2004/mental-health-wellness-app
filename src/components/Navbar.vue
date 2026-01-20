<template>
  <nav class="navbar">
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/breathing">Breathing</router-link></li>
      <li><router-link to="/wellness">Wellness</router-link></li>
      <li><router-link to="/ai-support">AI Support</router-link></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
}
</script>

<style scoped>
.navbar {
  background-color: #2c3e50;
  padding: 1rem;
}
.navbar ul {
  list-style: none;
  display: flex;
  gap: 1rem;
  margin: 0;
  padding: 0;
}
.navbar a {
  color: #fff;
  text-decoration: none;
}
.navbar a.router-link-active {
  font-weight: bold;
  border-bottom: 2px solid #fff;
}
</style>