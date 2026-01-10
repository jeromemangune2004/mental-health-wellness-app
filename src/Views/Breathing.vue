<template>
  <div class="breathing-container">
    <div class="left-panel">
      <div class="mouth-wrapper">
        <svg class="breathing-mouth" viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
          <path class="lip top-lip" d="M20,50 Q100,0 180,50 Q100,20 20,50 Z" fill="#ff8a80" />
          <path class="lip bottom-lip" d="M20,50 Q100,100 180,50 Q100,80 20,50 Z" fill="#ff5252" />
          <ellipse class="mouth-opening" cx="100" cy="50" rx="60" ry="0" fill="#4a0000" />
        </svg>
        <p class="instruction-text">Breathe in... hold... breathe out...</p>
      </div>
    </div>

    <div class="right-panel">
      <header class="breathing-header">
        <h1>Find Your Calm</h1>
        <p>Let your breath guide you back to balance.</p>
      </header>

      <div class="exercise-list">
        <h3>✨ Breathing Techniques</h3>
        <div class="tech-card">
          <span>🌿</span>
          <div>
            <h4>4-7-8 Technique</h4>
            <p>Inhale for 4, hold for 7, exhale for 8. Great for sleep and anxiety relief.</p>
          </div>
        </div>

        <div class="tech-card">
          <span>🌊</span>
          <div>
            <h4>Box Breathing</h4>
            <p>Inhale, hold, exhale, hold — each for 4 seconds.</p>
          </div>
        </div>

        <div class="tech-card">
          <span>🔥</span>
          <div>
            <h4>Stimulating Breath</h4>
            <p>Short, quick inhales and exhales to boost energy.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Breathing',
}
</script>

<style scoped>
.breathing-container {
  display: flex;
  flex-wrap: wrap;
  min-height: 100vh;
  font-family: 'Inter', sans-serif;
  background: linear-gradient(120deg, #fce4ec, #f1f8f7);
  padding: 40px 20px;
  gap: 40px;
  justify-content: center;
  align-items: center;
}

.left-panel {
  flex: 1 1 300px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.mouth-wrapper {
  text-align: center;
  width: 250px;
}

.breathing-mouth {
  width: 100%;
  filter: drop-shadow(0 10px 15px rgba(255, 82, 82, 0.3));
}

/* Animation Logic */
.mouth-opening {
  animation: openMouth 8s infinite ease-in-out;
  transform-origin: center;
}

.top-lip {
  animation: moveTopLip 8s infinite ease-in-out;
}

.bottom-lip {
  animation: moveBottomLip 8s infinite ease-in-out;
}

@keyframes openMouth {
  0%, 100% { ry: 0; opacity: 0; }
  50% { ry: 25; opacity: 1; }
}

@keyframes moveTopLip {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-15px); }
}

@keyframes moveBottomLip {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(15px); }
}

.instruction-text {
  margin-top: 30px;
  font-size: 1.2rem;
  color: #c62828;
  font-weight: 600;
  letter-spacing: 1px;
}

/* Right Panel Styles (Keeping your original structure) */
.right-panel {
  flex: 1 1 400px;
  max-width: 500px;
}

.breathing-header h1 {
  font-size: 2.2rem;
  color: #b71c1c;
  margin-bottom: 10px;
}

.exercise-list {
  background: #ffffff;
  padding: 25px;
  border-radius: 20px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05);
}

.tech-card {
  display: flex;
  align-items: flex-start;
  gap: 15px;
  margin-bottom: 20px;
  padding-bottom: 15px;
  border-bottom: 1px solid #f0f0f0;
}
</style>