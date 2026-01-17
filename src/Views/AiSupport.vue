<script setup>
import { ref, nextTick, computed } from 'vue'
import { getAiMessage } from '../services/aiService'
import { fallbackMessages } from '../services/fallbackMessages'

// --- State Management ---
const mood = ref("")
const loading = ref(false)
const chatWindow = ref(null) 
const isOnlineMode = ref(true)
const lastError = ref(false)

const history = ref([
  {
    role: 'bot',
    text: "Kumusta? Ako ang iyong Wellness Guide. Nandito ako para makinig. Ano ang nararamdaman mo ngayon?",
    reactions: []
  }
])

const categories = [
  { label: 'Stressed', emoji: '😫', prompt: 'Sobrang stressed ako at pagod na.' },
  { label: 'Anxious', emoji: '😰', prompt: 'Kinakabahan ako at hindi ako mapakali.' },
  { label: 'Malungkot', emoji: '😢', prompt: 'Medyo malungkot ako ngayon.' },
  { label: 'Pagod', emoji: '😴', prompt: 'Wala akong energy at sobrang pagod.' }
]

// --- Logic ---
const scrollToBottom = async () => {
  await nextTick()
  if (chatWindow.value) {
    chatWindow.value.scrollTo({
      top: chatWindow.value.scrollHeight,
      behavior: 'smooth'
    })
  }
}

const addReaction = (index, emoji) => {
  if (!history.value[index].reactions) history.value[index].reactions = []
  if (!history.value[index].reactions.includes(emoji)) {
    history.value[index].reactions.push(emoji)
  }
}

const askAI = async (retryText = null) => {
  const textToSend = retryText || mood.value.trim()
  if (textToSend.length < 2) return

  if (!retryText) {
    history.value.push({ role: 'user', text: textToSend })
    mood.value = ""
  }
  
  loading.value = true
  lastError.value = false
  await scrollToBottom()

  let response;
  if (isOnlineMode.value) {
    try {
      const tagalogPrompt = `The user says: "${textToSend}". Respond in Tagalog. Be supportive and empathetic.`
      response = await getAiMessage(tagalogPrompt)
    } catch (e) {
      lastError.value = true
      response = "Pasensya na, nagkaroon ng error sa koneksyon. Gusto mo bang subukan ulit?"
    }
  } else {
    response = fallbackMessages[Math.floor(Math.random() * fallbackMessages.length)]
  }

  history.value.push({ role: 'bot', text: response, reactions: [] })
  loading.value = false
  await scrollToBottom()
}
</script>

<template>
  <div class="ai-page">
    <div class="chat-card shadow-premium">
      <header class="chat-header-gradient">
        <div class="header-content">
          <div class="bot-info">
            <div class="avatar-glow">🌸</div>
            <div>
              <h1>Wellness Guide</h1>
              <div class="status-container">
                <span class="status-dot" :class="{ 'offline': !isOnlineMode }"></span>
                <p>{{ isOnlineMode ? 'Online Support' : 'Offline Mode' }}</p>
              </div>
            </div>
          </div>
          <div class="toggle-container">
            <label class="switch">
              <input type="checkbox" v-model="isOnlineMode">
              <span class="slider round"></span>
            </label>
          </div>
        </div>
      </header>

      <div class="chat-window" ref="chatWindow">
        <div v-for="(msg, index) in history" :key="index" :class="['msg-container', msg.role]">
          <div v-if="msg.role === 'bot'" class="bot-icon">🌿</div>
          <div class="bubble-group">
            <div class="bubble shadow-sm">
              {{ msg.text }}
            </div>
            
            <div v-if="msg.role === 'bot' && index > 0" class="actions">
              <div class="emoji-picker-pill">
                <span @click="addReaction(index, '❤️')">❤️</span>
                <span @click="addReaction(index, '👍')">👍</span>
                <span @click="addReaction(index, '🙏')">🙏</span>
              </div>
              <div class="applied-reactions">
                <span v-for="r in msg.reactions" :key="r" class="badge-reaction">{{ r }}</span>
              </div>
            </div>
          </div>
        </div>
        
        <div v-if="loading" class="msg-container bot">
          <div class="bot-icon">🌿</div>
          <div class="bubble typing-indicator">
            <span></span><span></span><span></span>
          </div>
        </div>

        <button v-if="lastError" @click="askAI(history[history.length-2].text)" class="retry-btn">
          Subukan Ulit
        </button>
      </div>

      <div class="mood-chips-container">
        <button v-for="c in categories" :key="c.label" @click="mood = c.prompt" class="chip-premium">
          <span class="chip-emoji">{{ c.emoji }}</span> {{ c.label }}
        </button>
      </div>

      <form @submit.prevent="askAI()" class="chat-input-area">
        <div class="input-glass-wrapper">
          <input
            v-model="mood"
            placeholder="Ano ang nasa isip mo?..."
            maxlength="100"
            :disabled="loading"
          />
          <div class="char-counter" :class="{ 'danger': mood.length >= 90 }">
            {{ mood.length }}
          </div>
        </div>
        <button class="send-btn-premium" :disabled="loading || mood.length < 2">
          <svg viewBox="0 0 24 24"><path fill="currentColor" d="M2,21L23,12L2,3V10L17,12L2,14V21Z" /></svg>
        </button>
      </form>
    </div>
  </div>
</template>

<style scoped>
/* Main Background Gradient - Warm Peach to Rose */
.ai-page { 
  display: flex; justify-content: center; align-items: center; 
  min-height: 100vh; background: linear-gradient(135deg, #fce7f3 0%, #fae8ff 100%); 
  padding: 20px; 
}

.chat-card { 
  width: 100%; max-width: 480px; height: 750px; 
  background: #ffffff; border-radius: 32px; 
  display: flex; flex-direction: column; 
  overflow: hidden; border: 1px solid rgba(255,255,255,0.8);
}

/* Deeper shadow with a tint of plum */
.shadow-premium { box-shadow: 0 25px 50px -12px rgba(88, 28, 135, 0.15); }

/* Header Design - Deep Plum to Rose Gradient */
.chat-header-gradient { 
  background: linear-gradient(to right, #581c87, #86198f); 
  color: white; padding: 25px 20px; 
}

.avatar-glow {
  width: 45px; height: 45px; background: rgba(255,255,255,0.2);
  border-radius: 14px; display: flex; align-items: center;
  justify-content: center; font-size: 1.5rem; border: 1px solid rgba(255,255,255,0.3);
}

.status-container { display: flex; align-items: center; gap: 6px; margin-top: 2px; }
/* Golden status dot for a premium feel */
.status-dot { width: 8px; height: 8px; background: #fbbf24; border-radius: 50%; box-shadow: 0 0 10px #fbbf24; }
.status-dot.offline { background: #cbd5e1; box-shadow: none; }
.status-container p { font-size: 0.8rem; opacity: 0.9; }

/* Chat Window - Very soft cream background */
.chat-window { flex: 1; padding: 25px; overflow-y: auto; background: #fffafb; display: flex; flex-direction: column; gap: 20px; }

.bubble { 
  padding: 14px 18px; border-radius: 20px; font-size: 0.95rem; 
  line-height: 1.5; max-width: 100%; 
}

/* User Bubble - Sunset Rose */
.user .bubble { 
  background: #be185d; color: white; 
  border-bottom-right-radius: 4px;
}

/* Bot Bubble - Clean White with soft rose border */
.bot .bubble { 
  background: white; color: #4c0519; 
  border-bottom-left-radius: 4px; border: 1px solid #fce7f3;
}

.bot-icon { font-size: 1.2rem; }

/* Reactions */
.emoji-picker-pill {
  display: flex; gap: 10px; padding: 4px 12px;
  background: white; border-radius: 20px; border: 1px solid #fce7f3;
  width: fit-content; margin-top: 8px; cursor: pointer;
}

.badge-reaction {
  font-size: 0.8rem; background: #fdf2f8; color: #be185d; padding: 2px 8px;
  border-radius: 10px; border: 1px solid #fce7f3;
}

/* Mood Chips - Soft Pink/Plum style */
.mood-chips-container { 
  display: flex; gap: 10px; padding: 15px 20px; 
  overflow-x: auto; background: white; border-top: 1px solid #fff1f2; 
}

.chip-premium {
  flex-shrink: 0; padding: 8px 16px; border-radius: 14px;
  background: #fdf2f8; border: 1px solid #fbcfe8;
  color: #9d174d; font-weight: 600; font-size: 0.85rem;
  transition: all 0.2s ease;
}

.chip-premium:hover { transform: translateY(-2px); background: #fce7f3; border-color: #f9a8d4; }

/* Input Styling */
.chat-input-area { padding: 20px; background: white; display: flex; gap: 12px; align-items: center; }
.input-glass-wrapper { 
  flex: 1; position: relative; 
  background: #fff1f2; border-radius: 18px; 
  padding: 2px; border: 1px solid #fce7f3;
}

input { 
  width: 100%; padding: 12px 15px; background: transparent; 
  border: none; outline: none; color: #4c0519;
}
input::placeholder { color: #d1d5db; }

.char-counter { position: absolute; right: 15px; bottom: 12px; font-size: 0.75rem; color: #fda4af; }
.char-counter.danger { color: #e11d48; }

/* Send Button - Matched to User Bubble */
.send-btn-premium {
  background: #be185d; color: white; border: none;
  width: 48px; height: 48px; border-radius: 16px;
  display: flex; align-items: center; justify-content: center;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 12px rgba(190, 24, 93, 0.2);
}

.send-btn-premium:hover:not(:disabled) { transform: scale(1.05); background: #9d174d; }
.send-btn-premium:disabled { background: #fbcfe8; cursor: not-allowed; }

/* Typing Animation - Rose color */
.typing-indicator span {
  height: 6px; width: 6px; background: #f472b6;
  display: inline-block; border-radius: 50%;
  margin: 0 2px; animation: bounce 1.3s infinite;
}
.typing-indicator span:nth-child(2) { animation-delay: 0.15s; }
.typing-indicator span:nth-child(3) { animation-delay: 0.3s; }

@keyframes bounce { 0%, 60%, 100% { transform: translateY(0); } 30% { transform: translateY(-4px); } }

/* Custom Switch - Rose Gold / Pink */
.switch { position: relative; display: inline-block; width: 40px; height: 22px; }
.switch input { opacity: 0; width: 0; height: 0; }
.slider {
  position: absolute; cursor: pointer; top: 0; left: 0; right: 0; bottom: 0;
  background-color: #e2e8f0; transition: .4s; border-radius: 34px;
}
.slider:before {
  position: absolute; content: ""; height: 16px; width: 16px;
  left: 3px; bottom: 3px; background-color: white; transition: .4s; border-radius: 50%;
}
input:checked + .slider { background-color: #be185d; }
input:checked + .slider:before { transform: translateX(18px); }

.retry-btn {
  align-self: center; background: white; border: 1px solid #be185d; color: #be185d;
  padding: 8px 16px; border-radius: 12px; margin-top: 10px; cursor: pointer; transition: 0.2s;
}
.retry-btn:hover { background: #be185d; color: white; }
</style>