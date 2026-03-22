<template>
  <div class="admin-wrap">

    <!-- Sidebar -->
    <aside class="sidebar">
      <div class="sidebar-logo">
        <span>Edu</span> Admin
      </div>
      <nav class="sidebar-nav">
        <a href="#" @click.prevent="activeSection = 'dashboard'" :class="{active: activeSection === 'dashboard'}">
          <i class="fa fa-tachometer"></i> Dashboard
        </a>
        <a href="#" @click.prevent="activeSection = 'video'" :class="{active: activeSection === 'video'}">
          <i class="fa fa-film"></i> Video Background
        </a>
        <a href="#" @click.prevent="activeSection = 'scroll'" :class="{active: activeSection === 'scroll'}">
          <i class="fa fa-image"></i> Scroll Backgrounds
        </a>
        <a href="#" @click.prevent="activeSection = 'applicants'" :class="{active: activeSection === 'applicants'}">
          <i class="fa fa-users"></i> Applicants
        </a>
        <a href="#" @click.prevent="activeSection = 'users'" :class="{active: activeSection === 'users'}">
          <i class="fa fa-user-plus"></i> Users
        </a>
      </nav>
      <button class="logout-btn" @click="logout">
        <i class="fa fa-sign-out"></i> Logout
      </button>
    </aside>

    <!-- Main Content -->
    <main class="main-content">

      <!-- Top bar -->
      <div class="topbar">
        <h2>{{ sectionLabels[activeSection] }}</h2>
        <span class="admin-badge"><i class="fa fa-user-circle"></i> Admin</span>
      </div>

      <!-- Dashboard Overview -->
      <section v-if="activeSection === 'dashboard'" class="section-content">
        <div class="stats-grid">
          <div class="stat-card">
            <i class="fa fa-film stat-icon" style="color:#f5ac53"></i>
            <div>
              <div class="stat-label">Videos Uploaded</div>
              <div class="stat-value">{{ videos.length }}</div>
            </div>
          </div>
          <div class="stat-card">
            <i class="fa fa-image stat-icon" style="color:#8cb080"></i>
            <div>
              <div class="stat-label">Scroll Backgrounds</div>
              <div class="stat-value">{{ scrollBgs.length }}</div>
            </div>
          </div>
          <div class="stat-card">
            <i class="fa fa-users stat-icon" style="color:#5b8dd9"></i>
            <div>
              <div class="stat-label">All Applicants</div>
              <div class="stat-value">{{ applicants.length }}</div>
            </div>
          </div>
          <div class="stat-card">
            <i class="fa fa-user-plus stat-icon" style="color:#9b59b6"></i>
            <div>
              <div class="stat-label">Registered Users</div>
              <div class="stat-value">{{ users.length }}</div>
            </div>
          </div>
        </div>
        <div class="welcome-card">
          <h3>Welcome back, <strong>Admin</strong> 👋</h3>
          <p>Use the sidebar to manage the site. You can change video backgrounds, scroll section images, and manage applicant entries.</p>
        </div>
      </section>

      <!-- Video Background Manager -->
      <section v-if="activeSection === 'video'" class="section-content">
        <div class="card">
          <h3 class="card-title">Upload New Video</h3>
          <p class="card-sub">Upload an MP4 video file to use as the homepage hero background.</p>
          <div class="upload-row">
            <input type="file" accept="video/mp4,video/webm" @change="onVideoUpload" class="file-input">
            <span class="file-hint">MP4 or WebM format</span>
          </div>
        </div>

        <div class="card">
          <h3 class="card-title">Available Videos <span class="count-badge">{{ videos.length }}</span></h3>
          <div class="video-grid">
            <div v-for="(vid, i) in videos" :key="i" class="video-card" :class="{selected: activeVideo === i}">
              <video :src="vid.url" muted class="video-thumb"></video>
              <div class="video-info">
                <p class="video-name">{{ vid.name }}</p>
                <button @click="setActiveVideo(i)" class="select-btn" :class="{active: activeVideo === i}">
                  {{ activeVideo === i ? '✓ Active' : 'Set Active' }}
                </button>
              </div>
            </div>
          </div>
          <p v-if="videos.length === 0" class="empty-msg">No videos uploaded yet.</p>
        </div>
      </section>

      <!-- Scroll Background Manager -->
      <section v-if="activeSection === 'scroll'" class="section-content">
        <div class="card">
          <h3 class="card-title">Upload Background Image</h3>
          <p class="card-sub">Upload an image for any scroll section background and set it as active.</p>
          <div class="upload-row">
            <input type="file" accept="image/*" @change="onScrollBgUpload" class="file-input">
            <select v-model="selectedScrollSection" class="select-dropdown">
              <option v-for="(sec, i) in scrollSections" :key="i" :value="i">{{ sec }}</option>
            </select>
            <span class="file-hint">JPG, PNG, WEBP</span>
          </div>
        </div>

        <div v-for="(sec, secIdx) in scrollSections" :key="secIdx" class="card">
          <h3 class="card-title">{{ sec }} <span class="count-badge">{{ scrollBgs.filter(b => b.section === secIdx).length }}</span></h3>
          <div class="img-grid">
            <div v-for="(bg, i) in scrollBgs.filter(b => b.section === secIdx)" :key="i"
                class="img-card" :class="{selected: bg.active}">
              <img :src="bg.url" class="bg-thumb" alt="">
              <div class="img-info">
                <p class="img-name">{{ bg.name }}</p>
                <button @click="setActiveBg(bg)" class="select-btn" :class="{active: bg.active}">
                  {{ bg.active ? '✓ Active' : 'Set Active' }}
                </button>
              </div>
            </div>
          </div>
          <p v-if="scrollBgs.filter(b => b.section === secIdx).length === 0" class="empty-msg">No images for this section yet.</p>
        </div>
      </section>

      <!-- Applicants Manager -->
      <section v-if="activeSection === 'applicants'" class="section-content">
        <div class="card">
          <div class="card-header-row">
            <h3 class="card-title">All Applicants <span class="count-badge">{{ applicants.length }}</span></h3>
            <button @click="showAddApplicant = true" class="add-btn"><i class="fa fa-plus"></i> Add Applicant</button>
          </div>
          <table class="applicant-table">
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Course</th>
                <th>Date Applied</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(app, i) in applicants" :key="i">
                <td>{{ i + 1 }}</td>
                <td><strong>{{ app.name }}</strong></td>
                <td>{{ app.email }}</td>
                <td>{{ app.course }}</td>
                <td>{{ app.date }}</td>
                <td>
                  <button @click="removeApplicant(i)" class="del-btn"><i class="fa fa-trash"></i></button>
                </td>
              </tr>
              <tr v-if="applicants.length === 0">
                <td colspan="6" class="empty-msg">No applicants yet.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <!-- Users Manager -->
      <section v-if="activeSection === 'users'" class="section-content">
        <div class="card">
          <div class="card-header-row">
            <h3 class="card-title">Registered Users <span class="count-badge">{{ users.length }}</span></h3>
            <button @click="showAddUser = true" class="add-btn" style="background:#9b59b6"><i class="fa fa-user-plus"></i> Add User</button>
          </div>
          <table class="applicant-table">
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Username</th>
                <th>Email</th>
                <th>Role</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(user, i) in users" :key="i">
                <td>{{ i + 1 }}</td>
                <td><strong>{{ user.name }}</strong></td>
                <td><span class="username-tag">{{ user.username }}</span></td>
                <td>{{ user.email }}</td>
                <td><span :class="'role-badge role-' + user.role">{{ user.role }}</span></td>
                <td>
                  <div style="display:flex;gap:6px;">
                    <button @click="openChangePassword(i)" class="pw-btn" title="Change Password">
                      <i class="fa fa-key"></i> Password
                    </button>
                    <button @click="removeUser(i)" class="del-btn" :disabled="user.role === 'super-admin'" :title="user.role === 'super-admin' ? 'Cannot delete super admin' : 'Remove user'"><i class="fa fa-trash"></i></button>
                  </div>
                </td>
              </tr>
              <tr v-if="users.length === 0">
                <td colspan="6" class="empty-msg">No users yet.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

    </main>

    <!-- Add Applicant Modal -->
    <div v-if="showAddApplicant" class="modal-overlay" @click.self="showAddApplicant = false">
      <div class="modal-box">
        <h3>Add New Applicant</h3>
        <div class="modal-form">
          <label>Name</label>
          <input v-model="newApp.name" type="text" placeholder="Full Name">
          <label>Email</label>
          <input v-model="newApp.email" type="email" placeholder="email@example.com">
          <label>Course</label>
          <input v-model="newApp.course" type="text" placeholder="Course Title">
          <label>Date Applied</label>
          <input v-model="newApp.date" type="date">
        </div>
        <div class="modal-footer">
          <button @click="showAddApplicant = false" class="cancel-btn">Cancel</button>
          <button @click="addApplicant" class="confirm-btn">Add Applicant</button>
        </div>
      </div>
    </div>

    <!-- Add User Modal -->
    <div v-if="showAddUser" class="modal-overlay" @click.self="showAddUser = false">
      <div class="modal-box">
        <h3>Add New User</h3>
        <div class="modal-form">
          <label>Full Name</label>
          <input v-model="newUser.name" type="text" placeholder="Full Name">
          <label>Username</label>
          <input v-model="newUser.username" type="text" placeholder="e.g. jdelacruz">
          <label>Email</label>
          <input v-model="newUser.email" type="email" placeholder="email@example.com">
          <label>Password</label>
          <input v-model="newUser.password" type="password" placeholder="Password">
          <label>Role</label>
          <select v-model="newUser.role" class="select-dropdown" style="width:100%;padding:10px 16px;border:2px solid #e5e5e5;border-radius:10px">
            <option value="user">User</option>
            <option value="editor">Editor</option>
            <option value="admin">Admin</option>
          </select>
        </div>
        <div class="modal-footer">
          <button @click="showAddUser = false" class="cancel-btn">Cancel</button>
          <button @click="addUser" class="confirm-btn" style="background:#9b59b6">Add User</button>
        </div>
      </div>
    </div>

    <!-- Change Password Modal -->
    <div v-if="showChangePassword" class="modal-overlay" @click.self="closeChangePassword">
      <div class="modal-box">
        <div style="display:flex;align-items:center;gap:12px;margin-bottom:20px;">
          <div style="background:#f3e8ff;border-radius:50%;width:42px;height:42px;display:flex;align-items:center;justify-content:center;">
            <i class="fa fa-key" style="color:#9b59b6;font-size:18px;"></i>
          </div>
          <div>
            <h3 style="margin:0;font-size:18px;">Change Password</h3>
            <p style="margin:0;font-size:13px;color:#888;">User: <strong>{{ changePwTarget ? users[changePwTarget.index].username : '' }}</strong></p>
          </div>
        </div>

        <div class="modal-form">
          <label>New Password</label>
          <div style="position:relative">
            <input v-model="changePwForm.newPassword" :type="showPw1 ? 'text' : 'password'" placeholder="New Password" style="padding-right:44px">
            <button type="button" @click="showPw1 = !showPw1" style="position:absolute;right:12px;top:50%;transform:translateY(-50%);background:none;border:none;cursor:pointer;color:#888;">
              <i :class="showPw1 ? 'fa fa-eye-slash' : 'fa fa-eye'"></i>
            </button>
          </div>

          <label>Confirm New Password</label>
          <div style="position:relative">
            <input v-model="changePwForm.confirmPassword" :type="showPw2 ? 'text' : 'password'" placeholder="Confirm Password" style="padding-right:44px">
            <button type="button" @click="showPw2 = !showPw2" style="position:absolute;right:12px;top:50%;transform:translateY(-50%);background:none;border:none;cursor:pointer;color:#888;">
              <i :class="showPw2 ? 'fa fa-eye-slash' : 'fa fa-eye'"></i>
            </button>
          </div>

          <div v-if="changePwError" style="background:#fee2e2;color:#c0392b;border-radius:8px;padding:8px 14px;font-size:13px;font-weight:600;">
            <i class="fa fa-exclamation-circle"></i> {{ changePwError }}
          </div>
          <div v-if="changePwSuccess" style="background:#d1fae5;color:#065f46;border-radius:8px;padding:8px 14px;font-size:13px;font-weight:600;">
            <i class="fa fa-check-circle"></i> {{ changePwSuccess }}
          </div>
        </div>

        <div class="modal-footer">
          <button @click="closeChangePassword" class="cancel-btn">Cancel</button>
          <button @click="submitChangePassword" class="confirm-btn" style="background:#9b59b6;">
            <i class="fa fa-save"></i> Save Password
          </button>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { bgStore } from '../store/backgrounds.js'

const router = useRouter()
const activeSection = ref('dashboard')
const sectionLabels = {
  dashboard: 'Dashboard',
  video: 'Video Background Manager',
  scroll: 'Scroll Section Backgrounds',
  applicants: 'Applicants Management',
  users: 'Users Management'
}

// --- Video Background ---
const videos = ref([
  { name: 'course-video.mp4', url: '/assets/images/course-video.mp4' }
])
const activeVideo = ref(0)

const onVideoUpload = (e) => {
  const file = e.target.files[0]
  if (!file) return
  const url = URL.createObjectURL(file)
  videos.value.push({ name: file.name, url })
  activeVideo.value = videos.value.length - 1
  e.target.value = ''
}

const setActiveVideo = (i) => {
  activeVideo.value = i
}

// --- Scroll Backgrounds ---
// Section 0 = Apply Now (laki & bae background)
// Section 1 = Our Facts (girl drawing background)
const scrollSections = ['Section 2: Apply Now (Man & Woman Background)', 'Section 3: Our Facts (Girl Drawing Background)']
const selectedScrollSection = ref(0)

// Pre-populate with the default/existing background images from the template
const scrollBgs = ref([
  { name: 'apply-bg.jpg (Default)', url: '/assets/images/apply-bg.jpg', section: 0, active: true },
  { name: 'facts-bg.jpg (Default)', url: '/assets/images/facts-bg.jpg', section: 1, active: true },
])

// Set the initial defaults into the shared store so Home.vue reflects them
bgStore.applyNow = '/assets/images/apply-bg.jpg'
bgStore.ourFacts = '/assets/images/facts-bg.jpg'

const onScrollBgUpload = (e) => {
  const file = e.target.files[0]
  if (!file) return
  const url = URL.createObjectURL(file)
  // Deactivate others in same section
  scrollBgs.value.forEach(b => { if(b.section === selectedScrollSection.value) b.active = false })
  const newEntry = { name: file.name, url, section: selectedScrollSection.value, active: true }
  scrollBgs.value.push(newEntry)
  // Immediately apply to bgStore so Home.vue updates
  if (selectedScrollSection.value === 0) bgStore.applyNow = url
  else if (selectedScrollSection.value === 1) bgStore.ourFacts = url
  e.target.value = ''
}

const setActiveBg = (bg) => {
  scrollBgs.value.forEach(b => { if(b.section === bg.section) b.active = false })
  bg.active = true
  // Apply to shared store — Home.vue will reactively update
  if (bg.section === 0) bgStore.applyNow = bg.url
  else if (bg.section === 1) bgStore.ourFacts = bg.url
}

// --- Applicants ---
const applicants = ref([
  { name: 'Juan Dela Cruz', email: 'juan@example.com', course: 'New Lecturers Meeting', date: '2024-11-10' },
  { name: 'Maria Santos', email: 'maria@example.com', course: 'Online Teaching Techniques', date: '2024-11-14' },
])
const showAddApplicant = ref(false)
const newApp = ref({ name: '', email: '', course: '', date: '' })

const addApplicant = () => {
  if (!newApp.value.name || !newApp.value.email || !newApp.value.course) return
  applicants.value.push({ ...newApp.value })
  newApp.value = { name: '', email: '', course: '', date: '' }
  showAddApplicant.value = false
}

const removeApplicant = (i) => {
  if (confirm('Remove this applicant?')) applicants.value.splice(i, 1)
}

const logout = () => {
  router.push('/')
}

// --- Users ---
const users = ref([
  { name: 'Admin User', username: 'admin', email: 'admin@admin.com', role: 'super-admin' }
])
const showAddUser = ref(false)
const newUser = ref({ name: '', username: '', email: '', password: '', role: 'user' })

const addUser = () => {
  if (!newUser.value.name || !newUser.value.username || !newUser.value.email) return
  users.value.push({ ...newUser.value })
  newUser.value = { name: '', username: '', email: '', password: '', role: 'user' }
  showAddUser.value = false
}

const removeUser = (i) => {
  if (users.value[i].role === 'super-admin') return
  if (confirm('Remove this user?')) users.value.splice(i, 1)
}

// --- Change Password ---
const showChangePassword = ref(false)
const changePwTarget = ref(null)  // { index }
const changePwForm = ref({ newPassword: '', confirmPassword: '' })
const changePwError = ref('')
const changePwSuccess = ref('')
const showPw1 = ref(false)
const showPw2 = ref(false)

const openChangePassword = (index) => {
  changePwTarget.value = { index }
  changePwForm.value = { newPassword: '', confirmPassword: '' }
  changePwError.value = ''
  changePwSuccess.value = ''
  showPw1.value = false
  showPw2.value = false
  showChangePassword.value = true
}

const closeChangePassword = () => {
  showChangePassword.value = false
  changePwTarget.value = null
}

const submitChangePassword = () => {
  changePwError.value = ''
  changePwSuccess.value = ''
  const { newPassword, confirmPassword } = changePwForm.value
  if (!newPassword || newPassword.length < 6) {
    changePwError.value = 'Password must be at least 6 characters.'
    return
  }
  if (newPassword !== confirmPassword) {
    changePwError.value = 'Passwords do not match.'
    return
  }
  // Save password to user record
  users.value[changePwTarget.value.index].password = newPassword
  changePwSuccess.value = 'Password changed successfully!'
  setTimeout(() => {
    closeChangePassword()
  }, 1500)
}
</script>

<style scoped>
.admin-wrap {
  display: flex;
  min-height: 100vh;
  font-family: 'Inter', 'Roboto', sans-serif;
  background: #f0f4f8;
}

/* Sidebar */
.sidebar {
  width: 240px;
  background: #232931;
  color: white;
  display: flex;
  flex-direction: column;
  padding: 30px 0;
  min-height: 100vh;
  position: sticky;
  top: 0;
  height: 100vh;
  overflow-y: auto;
}

.sidebar-logo {
  font-size: 22px;
  font-weight: 800;
  text-align: center;
  color: #f5ac53;
  margin-bottom: 36px;
  letter-spacing: 1px;
}
.sidebar-logo span { color: white; }

.sidebar-nav {
  display: flex;
  flex-direction: column;
  gap: 4px;
  flex: 1;
}

.sidebar-nav a {
  padding: 12px 24px;
  color: #bfc9d1;
  text-decoration: none;
  border-left: 4px solid transparent;
  font-size: 14px;
  font-weight: 600;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  gap: 10px;
}
.sidebar-nav a:hover, .sidebar-nav a.active {
  background: rgba(245, 172, 83, 0.1);
  color: #f5ac53;
  border-left-color: #f5ac53;
}

.logout-btn {
  margin: 16px 24px;
  padding: 10px 0;
  background: #c0392b;
  color: white;
  border: none;
  border-radius: 40px;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  transition: background 0.2s;
}
.logout-btn:hover { background: #e74c3c; }

/* Main Content */
.main-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
}

.topbar {
  background: white;
  padding: 18px 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 1px 4px rgba(0,0,0,0.07);
  position: sticky;
  top: 0;
  z-index: 50;
}
.topbar h2 {
  font-size: 20px;
  font-weight: 800;
  color: #232931;
  margin: 0;
}
.admin-badge {
  font-size: 14px;
  font-weight: 600;
  color: #f5ac53;
  display: flex;
  align-items: center;
  gap: 6px;
}

.section-content {
  padding: 28px 32px;
  display: flex;
  flex-direction: column;
  gap: 24px;
}

/* Stats */
.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 20px;
}
.stat-card {
  background: white;
  border-radius: 16px;
  padding: 24px;
  display: flex;
  align-items: center;
  gap: 18px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
}
.stat-icon {
  font-size: 36px;
}
.stat-label { font-size: 13px; color: #888; margin-bottom: 4px; }
.stat-value { font-size: 28px; font-weight: 900; color: #232931; }

.welcome-card {
  background: linear-gradient(135deg, #f5ac53, #e8845a);
  color: white;
  border-radius: 16px;
  padding: 28px;
}
.welcome-card h3 { margin: 0 0 8px; font-size: 20px; }
.welcome-card p { margin: 0; opacity: 0.9; font-size: 14px; }

/* Cards */
.card {
  background: white;
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
}
.card-title {
  font-size: 17px;
  font-weight: 800;
  color: #232931;
  margin: 0 0 4px;
  display: flex;
  align-items: center;
  gap: 10px;
}
.card-sub { font-size: 13px; color: #888; margin: 0 0 18px; }
.card-header-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 18px;
}
.count-badge {
  background: #f0f4f8;
  color: #555;
  border-radius: 20px;
  padding: 2px 10px;
  font-size: 12px;
  font-weight: 700;
}

/* Upload area */
.upload-row {
  display: flex;
  align-items: center;
  gap: 14px;
  flex-wrap: wrap;
  margin-top: 10px;
}
.file-input {
  padding: 8px 14px;
  border: 2px dashed #ccc;
  border-radius: 10px;
  background: #fafafa;
  cursor: pointer;
  font-size: 13px;
  color: #555;
}
.file-hint { font-size: 12px; color: #aaa; }

/* Video Grid */
.video-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 16px;
  margin-top: 14px;
}
.video-card {
  border: 2px solid #e0e0e0;
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
  transition: border-color 0.2s;
}
.video-card.selected { border-color: #f5ac53; }
.video-thumb {
  width: 100%;
  height: 110px;
  object-fit: cover;
  background: #111;
}
.video-info {
  padding: 10px 12px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.video-name {
  font-size: 12px;
  color: #555;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin: 0;
}

/* Scroll Bg Grid */
.img-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  gap: 16px;
  margin-top: 14px;
}
.img-card {
  border: 2px solid #e0e0e0;
  border-radius: 12px;
  overflow: hidden;
  transition: border-color 0.2s;
}
.img-card.selected { border-color: #8cb080; }
.bg-thumb {
  width: 100%;
  height: 90px;
  object-fit: cover;
}
.img-info {
  padding: 8px 10px;
  display: flex;
  flex-direction: column;
  gap: 6px;
}
.img-name {
  font-size: 11px;
  color: #666;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin: 0;
}

/* Select Button */
.select-btn {
  padding: 5px 12px;
  border-radius: 20px;
  border: 2px solid #f5ac53;
  background: transparent;
  color: #f5ac53;
  font-size: 12px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s;
}
.select-btn.active, .select-btn:hover {
  background: #f5ac53;
  color: white;
}

/* Select Dropdown */
.select-dropdown {
  padding: 8px 14px;
  border: 2px solid #ddd;
  border-radius: 10px;
  background: white;
  font-size: 13px;
  color: #333;
  cursor: pointer;
}

/* Add Button */
.add-btn {
  padding: 8px 18px;
  background: #5b8dd9;
  color: white;
  border: none;
  border-radius: 30px;
  font-size: 13px;
  font-weight: 700;
  cursor: pointer;
  transition: background 0.2s;
  display: flex;
  align-items: center;
  gap: 6px;
}
.add-btn:hover { background: #3f72c2; }

/* Table */
.applicant-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 8px;
}
.applicant-table th, .applicant-table td {
  padding: 12px 16px;
  text-align: left;
  border-bottom: 1px solid #f0f0f0;
  font-size: 14px;
}
.applicant-table th {
  background: #f7f9fc;
  font-weight: 800;
  color: #444;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}
.applicant-table tr:hover td { background: #fafafa; }

.del-btn {
  background: #ffe5e5;
  color: #c0392b;
  border: none;
  border-radius: 8px;
  padding: 6px 10px;
  cursor: pointer;
  font-size: 13px;
  transition: background 0.2s;
}
.del-btn:hover { background: #c0392b; color: white; }

.pw-btn {
  background: #f3e8ff;
  color: #9b59b6;
  border: none;
  border-radius: 8px;
  padding: 6px 12px;
  cursor: pointer;
  font-size: 13px;
  font-weight: 700;
  transition: background 0.2s;
  display: flex;
  align-items: center;
  gap: 5px;
  white-space: nowrap;
}
.pw-btn:hover { background: #9b59b6; color: white; }

.empty-msg {
  text-align: center;
  color: #aaa;
  font-style: italic;
  padding: 20px 0;
}

/* Modal */
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
}
.modal-box {
  background: white;
  border-radius: 20px;
  padding: 32px;
  width: 440px;
  max-width: 95vw;
  box-shadow: 0 12px 40px rgba(0,0,0,0.2);
}
.modal-box h3 {
  font-size: 20px;
  font-weight: 800;
  color: #232931;
  margin: 0 0 20px;
}
.modal-form {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.modal-form label {
  font-size: 12px;
  font-weight: 700;
  color: #666;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}
.modal-form input {
  padding: 10px 16px;
  border: 2px solid #e5e5e5;
  border-radius: 10px;
  font-size: 14px;
  outline: none;
  transition: border-color 0.2s;
}
.modal-form input:focus { border-color: #f5ac53; }
.modal-footer {
  display: flex;
  justify-content: flex-end;
  gap: 12px;
  margin-top: 24px;
}
.cancel-btn {
  padding: 10px 20px;
  border-radius: 30px;
  border: 2px solid #ddd;
  background: white;
  font-weight: 700;
  cursor: pointer;
  transition: background 0.2s;
}
.cancel-btn:hover { background: #f5f5f5; }
.confirm-btn {
  padding: 10px 20px;
  border-radius: 30px;
  border: none;
  background: #f5ac53;
  color: white;
  font-weight: 700;
  cursor: pointer;
  transition: background 0.2s;
}
.confirm-btn:hover { background: #e89935; }

/* Users Table Extras */
.username-tag {
  background: #f0f4f8;
  border-radius: 6px;
  padding: 3px 10px;
  font-size: 13px;
  font-weight: 700;
  color: #444;
  font-family: monospace;
}

.role-badge {
  padding: 3px 12px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}
.role-user       { background: #e8f4fd; color: #2980b9; }
.role-editor     { background: #eafaf1; color: #27ae60; }
.role-admin      { background: #fef9e7; color: #f39c12; }
.role-super-admin{ background: #f5eef8; color: #9b59b6; }

.del-btn:disabled {
  opacity: 0.3;
  cursor: not-allowed;
}

</style>
