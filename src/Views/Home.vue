<template>
  <div class="home-wrapper">
    <nav class="navbar">
      <div class="nav-container">
        <div class="nav-logo">
          <span class="logo-icon">🌿</span>
          <span class="logo-text">CalmCorner</span>
        </div>
        
        <ul class="nav-links">
          <li class="active">Home</li>
          <li>Exercises</li>
          <li>Journal</li>
          <li>AI Support</li>
        </ul>

        <div class="nav-actions">
          <button class="profile-btn">
            <span class="avatar">👤</span>
            <span class="username">Jerome Mangune</span>
          </button>
        </div>
      </div>
    </nav>

    <div class="floating-orb orb-1"></div>
    <div class="floating-orb orb-2"></div>

    <div class="home-container">
      <header class="hero-section">
        <div class="hero-content">
          <div class="icon-badge"><span class="icon">🧠</span></div>
          <h1>Welcome Back to Your <span class="text-gradient">Calm Corner</span></h1>
          <p class="subtitle">Every breath is a step toward clarity and peace.</p>
          <button class="btn-primary">Start Daily Session</button>
        </div>
      </header>

      <section class="card-grid">
        <div class="info-card" v-for="(card, index) in cards" :key="index">
          <div class="card-inner">
            <span class="card-icon">{{ card.icon }}</span>
            <h3>{{ card.title }}</h3>
            <p>{{ card.description }}</p>
            <span class="action-link">Explore →</span>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      cards: [
        { icon: '🌞', title: 'Morning', description: 'Start your day with a clear purpose.' },
        { icon: '💡', title: 'Moment', description: 'Pause and notice your surroundings.' },
        { icon: '📓', title: 'Reflect', description: 'Write down what you are grateful for.' },
        { icon: '🎶', title: 'Sound', description: 'Unwind with calming nature sounds.' }
      ]
    }
  }
}
</script>

<style scoped>
/* Navbar Styling */
.navbar {
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  width: 90%;
  max-width: 1100px;
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(15px);
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 100px;
  padding: 12px 30px;
  z-index: 1000;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
}

.nav-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-logo {
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 800;
  color: #5e35b1;
  font-size: 1.2rem;
}

.nav-links {
  display: flex;
  list-style: none;
  gap: 30px;
  margin: 0;
  padding: 0;
}

.nav-links li {
  font-size: 0.95rem;
  font-weight: 600;
  color: #636e72;
  cursor: pointer;
  transition: 0.3s;
  position: relative;
}

.nav-links li:hover, .nav-links li.active {
  color: #5e35b1;
}

.nav-links li.active::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 50%;
  transform: translateX(-50%);
  width: 5px;
  height: 5px;
  background: #5e35b1;
  border-radius: 50%;
}

.profile-btn {
  display: flex;
  align-items: center;
  gap: 8px;
  background: white;
  border: 1px solid #eee;
  padding: 6px 15px;
  border-radius: 50px;
  cursor: pointer;
  transition: 0.3s;
}

.profile-btn:hover {
  background: #f8f9fa;
  border-color: #5e35b1;
}

.username {
  font-size: 0.85rem;
  font-weight: 700;
  color: #2d3436;
}

/* Home Wrapper & Layout Adjustments */
.home-wrapper {
  min-height: 100vh;
  background: #fdfbff;
  padding-top: 120px; /* Room for fixed navbar */
  padding-bottom: 40px;
  position: relative;
  overflow-x: hidden;
}

.home-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.hero-section {
  background: rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(10px);
  border-radius: 40px;
  padding: 80px 20px;
  text-align: center;
  margin-bottom: 40px;
  border: 1px solid rgba(255,255,255,0.6);
}

h1 { font-size: 3.5rem; font-weight: 800; line-height: 1.1; margin-bottom: 20px; }
.text-gradient {
  background: linear-gradient(135deg, #5e35b1, #9c27b0);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.card-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}

.info-card {
  background: white;
  border-radius: 24px;
  padding: 25px;
  border: 1px solid #f0f0f0;
  transition: 0.3s;
}

.info-card:hover { transform: translateY(-8px); border-color: #5e35b1; box-shadow: 0 15px 30px rgba(0,0,0,0.05); }

/* Background Orbs */
.floating-orb { position: absolute; border-radius: 50%; filter: blur(80px); opacity: 0.4; z-index: -1; }
.orb-1 { width: 400px; height: 400px; background: #e1f5fe; top: 0; right: 0; }
.orb-2 { width: 400px; height: 400px; background: #fce4ec; bottom: 0; left: 0; }

.btn-primary {
  background: #5e35b1;
  color: white;
  padding: 16px 35px;
  border-radius: 100px;
  border: none;
  font-weight: 700;
  cursor: pointer;
  box-shadow: 0 10px 20px rgba(94, 53, 177, 0.2);
}

/* Mobile Responsiveness */
@media (max-width: 900px) {
  .nav-links { display: none; } /* Hide links on mobile for simplicity */
  .card-grid {
    display: flex;
    overflow-x: auto;
    padding-bottom: 20px;
  }
  .info-card { min-width: 260px; }
  h1 { font-size: 2.2rem; }
}
</style>