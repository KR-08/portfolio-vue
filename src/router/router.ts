import { createRouter, createWebHistory } from 'vue-router'

import TabsHome from '~/components/tabs/Home.vue'
import TabsAbout from '~/components/tabs/About.vue'
import TabsPortfolio from '~/components/tabs/Portfolio.vue'
import TabsContact from '~/components/tabs/Contact.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: TabsHome
        },
        {
            path:'/about',
            name:'about',
            component: TabsAbout
        },
        {
            path:'/portfolio',
            name:'portfolio',
            component: TabsPortfolio
        },
        {
            path:'/contact',
            name:'contact',
            component: TabsContact
        }
    ]
})

export default router
