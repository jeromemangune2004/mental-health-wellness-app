<template>
  <div class="app-shell">
    <aside class="sidebar">
      <div class="logo">🌿</div>
      <nav>
        <div class="nav-item active">🏠</div>
        <div class="nav-item">📊</div>
        <div class="nav-item">⚙️</div>
      </nav>
      <div class="user-avatar">👤</div>
    </aside>

    <main class="main-content">
      <header class="dashboard-header">
        <div class="greeting">
          <h1>Good morning, Alex</h1>
          <p>Saturday, January 10 — Let's focus on your peace today.</p>
        </div>
        <div class="status-pill">System Mindful</div>
      </header>

      <div class="bento-grid">
        <section class="grid-card breathing-zone">
          <div class="card-label">Focus Tool</div>
          <div class="mouth-container">
            <svg class="breathing-mouth" viewBox="0 0 200 100">
              <path class="lip top-lip" d="M20,50 Q100,0 180,50 Q100,20 20,50 Z" fill="#6d597a" />
              <path class="lip bottom-lip" d="M20,50 Q100,100 180,50 Q100,80 20,50 Z" fill="#b5838d" />
              <ellipse class="mouth-opening" cx="100" cy="50" rx="60" ry="0" fill="#352f36" />
            </svg>
          </div>
          <h3>Guided Respiration</h3>
          <p>Follow the rhythm to center yourself.</p>
        </section>

        <section class="grid-card chat-zone">
          <div class="card-label">AI Support</div>
          <div class="chat-feed" ref="chatFeed">
            <div v-for="(m, i) in messages" :key="i" :class="['msg', m.role]">
              {{ m.text }}
            </div>
            <div v-if="isTyping" class="msg bot typing">...</div>
          </div>
          <form @submit.prevent="handleSend" class="chat-input-area">
            <input v-model="userInput" placeholder="Talk to me..." />
            <button :disabled="isTyping">↗</button>
          </form>
        </section>

        <section class="grid-card tips-zone">
          <div class="card-label">Daily Wisdom</div>
          <div class="tip-item">
            <span class="tip-bullet">☀️</span>
            <div>
              <h4>Morning Light</h4>
              <p>10 mins of sun to reset.</p>
            </div>
          </div>
          <div class="tip-item">
            <span class="tip-bullet">💧</span>
            <div>
              <h4>Hydration</h4>
              <p>Drink 250ml of water now.</p>
            </div>
          </div>
        </section>

        <section class="grid-card stats-zone">
          <div class="card-label">Consistency</div>
          <div class="streak-count">12</div>
          <p>Day Streak</p>
        </section>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userInput: '',
      isTyping: false,
      messages: [{ role: 'bot', text: "How can I support your peace today?" }]
    }
  },
  methods: {
    handleSend() {
      if(!this.userInput) return;
      this.messages.push({ role: 'user', text: this.userInput });
      const input = this.userInput;
      this.userInput = '';
      this.isTyping = true;
      
      setTimeout(() => {
        this.isTyping = false;
        this.messages.push({ role: 'bot', text: "I'm here with you. Deep breaths." });
        this.$nextTick(() => {
          const feed = this.$refs.chatFeed;
          feed.scrollTop = feed.scrollHeight;
        });
      }, 1500);
    }
  }
}
</script>

<style scoped>
/* Base Styles */
.app-shell {
  display: flex;
  min-height: 100vh;
  background: #f8f9fa;
  color: #2d3436;
  font-family: 'Inter', sans-serif;
}

/* Sidebar */
.sidebar {
  width: 80px;
  background: #ffffff;
  border-right: 1px solid #eee;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 0;
  gap: 40px;
}
.nav-item { font-size: 1.5rem; cursor: pointer; opacity: 0.5; transition: 0.3s; }
.nav-item.active { opacity: 1; color: #6d597a; }

/* Main Content Area */
.main-content {
  flex: 1;
  padding: 40px 60px;
  max-width: 1200px;
  margin: 0 auto;
}

.dashboard-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
}
.greeting h1 { font-size: 2rem; margin: 0; color: #2d3436; }
.greeting p { color: #636e72; margin: 5px 0 0; }
.status-pill {
  background: #e3f2fd;
  color: #1976d2;
  padding: 6px 16px;
  border-radius: 100px;
  font-size: 0.8rem;
  font-weight: 600;
}

/* Bento Grid */
.bento-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 300px);
  gap: 24px;
}

.grid-card {
  background: #ffffff;
  border-radius: 32px;
  padding: 30px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.03);
  position: relative;
  overflow: hidden;
  border: 1px solid rgba(0,0,0,0.02);
}

.card-label {
  font-size: 0.7rem;
  font-weight: 800;
  text-transform: uppercase;
  color: #b2bec3;
  margin-bottom: 20px;
}

/* Component Specific Styles */
.breathing-zone {
  grid-row: span 2;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: linear-gradient(180deg, #ffffff 0%, #fef9f9 100%);
}

.mouth-container { height: 120px; margin-bottom: 30px; }
.breathing-mouth { width: 180px; }
.mouth-opening { animation: open 4s infinite ease-in-out; }
.top-lip { animation: top 4s infinite ease-in-out; }
.bottom-lip { animation: bottom 4s infinite ease-in-out; }

@keyframes open { 0%, 100% { ry: 0; } 50% { ry: 20; } }
@keyframes top { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
@keyframes bottom { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(10px); } }

.chat-zone {
  grid-column: span 2;
  display: flex;
  flex-direction: column;
}

.chat-feed {
  flex: 1;
  overflow-y: auto;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.msg {
  padding: 10px 16px;
  border-radius: 16px;
  font-size: 0.9rem;
  max-width: 70%;
}
.msg.bot { background: #f1f2f6; align-self: flex-start; }
.msg.user { background: #6d597a; color: white; align-self: flex-end; }

.chat-input-area {
  display: flex;
  gap: 10px;
}
.chat-input-area input {
  flex: 1;
  padding: 12px 20px;
  border-radius: 100px;
  border: 1px solid #eee;
  outline: none;
}
.chat-input-area button {
  width: 45px;
  background: #6d597a;
  color: white;
  border: none;
  border-radius: 50%;
  cursor: pointer;
}

.tip-item {
  display: flex;
  gap: 15px;
  margin-bottom: 20px;
}
.tip-bullet { font-size: 1.5rem; }
.tip-item h4 { margin: 0; font-size: 1rem; }
.tip-item p { margin: 0; font-size: 0.8rem; color: #636e72; }

.stats-zone {
  background: #6d597a;
  color: white;
  text-align: center;
}
.streak-count { font-size: 4rem; font-weight: 800; margin-top: 10px; }

@media (max-width: 900px) {
  .bento-grid { grid-template-columns: 1fr; grid-template-rows: auto; }
  .sidebar { display: none; }
}
</style>