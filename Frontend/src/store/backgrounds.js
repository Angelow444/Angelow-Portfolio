import { reactive, watch } from 'vue'

// --- PERSISTENCE HELPERS ---
const STORAGE_KEY = 'edu_admin_bg_settings'

const defaultSettings = {
  banner: '/assets/images/course-video.mp4', 
  bannerType: 'video',                      
  applyNow: '/assets/images/apply-bg.jpg',
  ourFacts: '/assets/images/facts-bg.jpg',
  // Persist the lists too so they don't disappear on refresh
  bannersList: [
    { name: 'course-video.mp4', url: '/assets/images/course-video.mp4', type: 'video' }
  ],
  scrollBgsList: [
    { name: 'apply-bg.jpg (Default)', url: '/assets/images/apply-bg.jpg', section: 0 },
    { name: 'facts-bg.jpg (Default)', url: '/assets/images/facts-bg.jpg', section: 1 },
  ]
}

// Load from localStorage or use defaults
const savedSettings = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}')

// Shared reactive background store
export const bgStore = reactive({
  banner: savedSettings.banner || defaultSettings.banner,
  bannerType: savedSettings.bannerType || defaultSettings.bannerType,
  applyNow: savedSettings.applyNow || defaultSettings.applyNow,
  ourFacts: savedSettings.ourFacts || defaultSettings.ourFacts,
  bannersList: savedSettings.bannersList || defaultSettings.bannersList,
  scrollBgsList: savedSettings.scrollBgsList || defaultSettings.scrollBgsList,
})

// Auto-save changes to localStorage
watch(bgStore, (newVal) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newVal))
  } catch (e) {
    console.error('Failed to save settings to localStorage:', e)
    // Optional: Warn the user if they've added too many images
    if (e.name === 'QuotaExceededError') {
      alert('Background storage is full! Please remove some old uploads.')
    }
  }
}, { deep: true })
