// routers/index.js
import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from '../components/LoginPage.vue'
import RegistrationPage from '../components/RegistrationPage.vue'
import Dashboard from '../components/student/StudentDashboard.vue'
import SearchBook from '../components/student/SearchBook.vue'
import PersonalInformation from '../components/student/PersonalInformation.vue'
import StudentProfile from '../components/student/StudentProfile.vue'
import BooksBorrowed from '../components/student/BooksBorrowed.vue' // Import document folder component
import JournalsBorrowed from '../components/student/JournalsBorrowed.vue' // Import picture folder component
import OtherBorrowed from '../components/student/OtherBorrowed.vue' // Import other folder component

const routes = [
  { path: '/', redirect: '/login' },
  { path: '/login', component: LoginPage },
  { path: '/register', component: RegistrationPage },
  {
    path: '/dashboard',
    component: Dashboard,
    children: [
      { path: '', redirect: '/dashboard/personal-materials' },
      { path: 'personal-materials/books', component: BooksBorrowed }, // Route for Books folder
      { path: 'personal-materials', component: PersonalInformation },
      { path: 'personal-materials/journals', component: JournalsBorrowed }, // Route for pictures folder
      { path: 'personal-materials/others', component: OtherBorrowed }, // Route for others folder
      { path: 'search', component: SearchBook },
      { path: 'profile', component: StudentProfile }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
