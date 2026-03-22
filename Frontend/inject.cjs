const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, '..', 'templatemo_569_edu_meeting', 'templatemo_569_edu_meeting');
const homeVuePath = path.join(__dirname, 'src', 'views', 'Home.vue');

let content = fs.readFileSync(path.join(srcDir, 'index.html'), 'utf-8');
const bodyRegex = /<body>([\s\S]*?)<\/body>/;
const match = content.match(bodyRegex);
let bodyContent = match[1];

// Remove original scripts
bodyContent = bodyContent.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');

// Insert the Member Login button
let navReplacement = `                          <li class="scroll-to-section"><a href="#contact">Contact Us</a></li> 
                          <li class="scroll-to-section" style="margin-left: 15px;">
                              <a href="javascript:void(0)" @click="showLogin = true" class="hover:bg-[#f5b66d] hover:text-white" style="border: 2px solid #f5b66d; border-radius: 20px; color: #f5b66d; padding: 8px 15px; font-weight: bold; background: transparent; transition: all 0.3s ease; display: inline-block;">Member Login</a>
                          </li>
`;
bodyContent = bodyContent.replace('<li class="scroll-to-section"><a href="#contact">Contact Us</a></li>', navReplacement);

// Modal HTML
let modalHtml = `
    <!-- Login Modal -->
    <div v-if="showLogin" class="fixed inset-0 z-[9999] flex items-center justify-center bg-black bg-opacity-50 transition-opacity">
      <div class="relative bg-[#8cb080] rounded-3xl w-full max-w-sm mx-4 overflow-hidden shadow-2xl p-6" style="border-radius: 2rem;">
        <button @click="showLogin = false" class="absolute top-4 right-4 text-gray-800 hover:text-black focus:outline-none">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
        </button>
        <h3 class="text-2xl font-bold text-gray-900 mb-6 font-sans">Member Login</h3>
        <form @submit.prevent="login" class="space-y-4">
          <div>
            <input type="text" v-model="form.username" placeholder="Username" class="w-full px-4 py-3 rounded-full bg-[#feefc9] border-none text-gray-800 placeholder-gray-500 focus:ring-2 focus:ring-[#f5b66d] focus:outline-none shadow-sm font-medium" required>
          </div>
          <div>
            <label class="pl-4 text-gray-700 text-sm mb-1 block">Password</label>
            <input type="password" v-model="form.password" placeholder="Password" class="w-full px-4 py-3 rounded-full bg-[#feefc9] border-none text-gray-800 placeholder-gray-500 focus:ring-2 focus:ring-[#f5b66d] focus:outline-none shadow-sm font-medium" required>
          </div>
          <div class="flex items-center pl-2 pt-2">
            <input type="checkbox" id="remember" class="w-4 h-4 text-[#f5b66d] bg-[#feefc9] border-none rounded focus:ring-[#f5b66d] focus:ring-2">
            <label for="remember" class="ml-2 text-sm text-gray-800 font-medium">Remember me</label>
          </div>
          <div class="pt-4 pb-2 text-center">
            <button type="submit" class="px-10 py-3 bg-[#f5b66d] text-white font-bold rounded-full hover:bg-orange-400 focus:outline-none focus:ring-4 focus:ring-orange-300 transition-colors shadow-md text-lg">
              Login
            </button>
          </div>
          <div class="text-center">
            <a href="#" class="text-sm text-gray-700 hover:text-gray-900 font-medium">Forgotten password?</a>
          </div>
          <div class="mt-8 text-center border-t border-gray-600 border-opacity-20 pt-4">
            <p class="text-white font-bold text-lg"><span class="mr-2">Any Questions?</span> <span class="text-gray-800">010-020-0340</span></p>
          </div>
        </form>
        <div class="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-[-1]" style="transform: translateY(1px);">
            <svg class="relative block w-full h-[60px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,120.22,194,105.15,238.11,94.59,281.39,78.22,321.39,56.44Z" class="fill-[#393946]"></path>
            </svg>
        </div>
      </div>
    </div>
`;
bodyContent += modalHtml;

const scriptHtml = `
<script setup>
import { ref } from 'vue'

const showLogin = ref(false)
const form = ref({
  username: '',
  password: ''
})

const login = async () => {
  try {
    const res = await fetch('http://localhost:8000/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form.value)
    })
    
    // In local dev, standard text could be returned if no JSON
    const text = await res.text()
    try {
        const data = JSON.parse(text)
        if(res.ok && data.success) {
          alert(data.message)
          showLogin.value = false
        } else {
          alert('Login failed: ' + (data.message || 'Invalid credentials'))
        }
    } catch(e) {
        if(res.ok) {
            alert('Login successful!')
            showLogin.value = false
        } else {
            alert('Login failed.')
        }
    }
  } catch (err) {
    alert('Error connecting to backend: ' + err)
  }
}
</script>
`;

const vueTemplate = '<template>\n' + bodyContent + '\n</template>\n' + scriptHtml + '\n';
fs.writeFileSync(homeVuePath, vueTemplate);

console.log("Home.vue regenerated carefully!");
