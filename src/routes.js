import Home from './views/Home.vue'
import About from './views/About.vue'
import Contact from './views/Contact.vue'

export default {
    mode: 'history',
    linkActiveClass: 'active',
    base: '/',
    routes: [
      { path: '/', component: Home },
      { path: '/about', component: About },
      { path: '/contact', component: Contact },
    ]
  }