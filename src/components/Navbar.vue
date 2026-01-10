<template>
  <nav class="navbar">
    <div class="brand">🧘‍♀️ WellnessApp</div>
    <div class="nav-links">
      <router-link to="/" class="nav-link" exact>Home</router-link>
      <router-link to="/breathing" class="nav-link">Breathing</router-link>
      <router-link to="/wellness" class="nav-link">Wellness</router-link>
      <router-link to="/ai-support" class="nav-link">AI Support</router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
}
</script>

<style scoped>
.navbar {
  background: linear-gradient(90deg, #6a11cb, #2575fc); /* Blue-violet gradient */
  padding: 1rem 2rem;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  border-radius: 8px;
}

.brand {
  font-size: 1.5rem;
  font-weight: bold;
  color: #ffffff;
}

.nav-links {
  display: flex;
  gap: 1.5rem;
}

.nav-link {
  color: #ffffff;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease, border-bottom 0.3s ease;
}

.nav-link:hover {
  color: #ffeaa7;
}

.nav-link.router-link-exact-active {
  border-bottom: 2px solid #ffeaa7;
}
</style>