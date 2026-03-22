import { reactive } from 'vue'

// Shared reactive background store
// Any component can import this and it will be reactive across the app
export const bgStore = reactive({
  applyNow: null,   // bg for "Apply Now / laki & bae" section
  ourFacts: null,   // bg for "Our Facts / girl drawing" section
})
