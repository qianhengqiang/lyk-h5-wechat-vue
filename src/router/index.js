import Vue from 'vue'
import VueRouter from 'vue-router'

// import Home from '../views/Home'
const Home = ()=>import('../views/Home')
const Publish = ()=>import('../views/Publish')
const Information = ()=>import('../views/Information')
const Houses = ()=>import('../views/Houses')
const Profile = ()=>import('../views/Profile')
const Search = ()=>import('../views/Search')
const Map = ()=>import('../views/Map')
const Chaiqian = ()=>import('../views/Chaiqian')
const Faq = ()=>import('../views/Faq')
const Experts = ()=>import('../views/Experts')
const Chaizheng = ()=>import('../views/Chaizheng')
const Consult = ()=>import('../views/Consult')


Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name:'home',
        component: Home,
        children:[
            {
                path:'/',
                name:'home-house',
                component:()=>import('@/components/Home/House.vue')
            }
        ]
    },
    {
        path: '/home',
        name:'home',
        component: Home,
        children:[
            {
                path:'/',
                name:'home-house',
                component:()=>import('@/components/Home/House.vue')
            },
            {
                path:'house',
                name:'home-house',
                component:()=>import('@/components/Home/House.vue')
            },
            {
                path:'experts',
                name:'home-experts',
                component:()=>import('@/components/Home/Experts.vue')
            },
            {
                path:'information',
                name:'home-information',
                component:()=>import('@/components/Home/Information.vue')
            },
            {
                path:'*',
                name:'home-house',
                component:()=>import('@/components/Home/House.vue')
            }
        ]
    },
    {
        path: '/publish',
        name:'publish',
        component: Publish
    },
    {
        path: '/information',
        name:'information',
        component: Information
    },
    {
        path: '/houses',
        name:'houses',
        component: Houses
    },
    {
        path: '/profile',
        name:'profile',
        component: Profile
    },
    {
        path:'/map',
        name:'map',
        component:Map
    },
    {
        path:'/search',
        name:'search',
        component:Search
    },
    {
        path:'/chaiqian',
        name:'chaiqian',
        component:Chaiqian
    },
    {
        path:'/faq',
        name:'faq',
        component:Faq
    },
    {
        path:'/experts',
        name:'experts',
        component:Experts
    },
    {
        path:'/chaizheng',
        name:'chaizheng',
        component:Chaizheng
    },
    {
        path:'/consult',
        name:'consult',
        component:Consult
    }
]

const router = new VueRouter({
    routes
})

export default router