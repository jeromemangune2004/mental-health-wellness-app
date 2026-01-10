<template>
  <div class="wellness-page">
    <div class="wellness-container">
      <div class="blob blob-1"></div>
      <div class="blob blob-2"></div>

      <header class="wellness-header">
        <div class="date-badge">Saturday, Jan 10</div>
        <h1>Daily Wellness</h1>
        <p>Small habits, big changes. Your mindful path starts here.</p>
      </header>

      <div class="tips-grid">
        <div class="tip-card highlight-card">
          <div class="card-content">
            <div class="tip-tag">✨ Focus of the Day</div>
            <h3>The 20-20-20 Rule</h3>
            <p>Every 20 minutes, look at something 20 feet away for 20 seconds to reduce eye strain and mental fatigue.</p>
          </div>
          <div class="card-illustration">👁️</div>
        </div>

        <div class="tip-card secondary-card">
          <div class="icon-wrapper">☀️</div>
          <div class="text-group">
            <h4>Morning Sunlight</h4>
            <p>Get 10 mins of sun early to regulate your sleep cycle.</p>
          </div>
        </div>

        <div class="tip-card secondary-card">
          <div class="icon-wrapper">🧘</div>
          <div class="text-group">
            <h4>Digital Detox</h4>
            <p>Turn off screens 30 mins before bed to quiet your mind.</p>
          </div>
        </div>

        <div class="tip-card secondary-card">
          <div class="icon-wrapper">💧</div>
          <div class="text-group">
            <h4>Hydration Check</h4>
            <p>Staying hydrated improves focus and energy levels.</p>
          </div>
        </div>
      </div>
      
      <footer class="wellness-footer">
        <button class="check-in-btn">Complete Daily Check-in</button>
      </footer>
    </div>
  </div>
</template>

<style scoped>
/* Main Layout & Background */
.wellness-page {
  min-height: 100vh;
  background: #fdf8f8;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px 20px;
  overflow: hidden;
  position: relative;
}

.wellness-container {
  max-width: 900px;
  width: 100%;
  position: relative;
  z-index: 1;
}

/* Background "Blobs" for atmosphere */
.blob {
  position: absolute;
  filter: blur(80px);
  z-index: -1;
  border-radius: 50%;
}
.blob-1 { width: 300px; height: 300px; background: #ffe5d9; top: -100px; left: -50px; }
.blob-2 { width: 250px; height: 250px; background: #d8e2dc; bottom: -50px; right: -50px; }

/* Header Styling */
.wellness-header {
  text-align: center;
  margin-bottom: 60px;
}

.date-badge {
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 0.75rem;
  font-weight: 700;
  color: #b5838d;
  margin-bottom: 12px;
}

h1 {
  font-size: 3.5rem;
  font-weight: 800;
  color: #6d597a;
  letter-spacing: -1px;
  margin: 0;
}

.wellness-header p {
  color: #8e7d8d;
  font-size: 1.15rem;
  margin-top: 10px;
}

/* Grid Layout */
.tips-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto auto;
  gap: 24px;
}

/* Base Card Style (Glassmorphism) */
.tip-card {
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 32px;
  padding: 30px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.03);
  transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275), box-shadow 0.3s ease;
}

.tip-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(109, 89, 122, 0.1);
  background: white;
}

/* Highlight Card Style */
.highlight-card {
  grid-column: 1 / -1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: linear-gradient(135deg, #ffffff 0%, #fff0f0 100%);
  border: 1px solid #ffb4a2;
}

.tip-tag {
  background: #ffb4a2;
  color: white;
  padding: 6px 16px;
  border-radius: 100px;
  font-size: 0.8rem;
  font-weight: 700;
  display: inline-block;
  margin-bottom: 20px;
}

.highlight-card h3 {
  font-size: 1.8rem;
  color: #6d597a;
  margin: 0 0 10px 0;
}

.card-illustration {
  font-size: 5rem;
  opacity: 0.9;
  filter: drop-shadow(0 10px 10px rgba(0,0,0,0.05));
}

/* Secondary Cards */
.secondary-card {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

.icon-wrapper {
  width: 50px;
  height: 50px;
  background: #fdf8f8;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 16px;
  font-size: 1.5rem;
  margin-bottom: 20px;
  box-shadow: inset 0 2px 4px rgba(0,0,0,0.02);
}

.secondary-card h4 {
  color: #6d597a;
  margin: 0 0 8px 0;
  font-size: 1.1rem;
}

.secondary-card p {
  font-size: 0.95rem;
  color: #8e7d8d;
  line-height: 1.5;
  margin: 0;
}

/* Footer & Button */
.wellness-footer {
  margin-top: 50px;
  text-align: center;
}

.check-in-btn {
  background: #6d597a;
  color: white;
  border: none;
  padding: 16px 40px;
  border-radius: 100px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 10px 20px rgba(109, 89, 122, 0.2);
}

.check-in-btn:hover {
  background: #5d4a69;
  transform: scale(1.05);
  box-shadow: 0 15px 30px rgba(109, 89, 122, 0.3);
}

/* Responsive */
@media (max-width: 768px) {
  .tips-grid {
    grid-template-columns: 1fr;
  }
  h1 {
    font-size: 2.5rem;
  }
  .card-illustration {
    display: none;
  }
}
</style>