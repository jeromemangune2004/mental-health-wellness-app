import { fallbackMessages } from './services/fallbackMessages'

const msg = fallbackMessages[Math.floor(Math.random() * fallbackMessages.length)]
console.log("Random fallback message:", msg)
