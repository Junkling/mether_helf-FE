import Home from "@/pages/Home";
import Items from "@/pages/Items";
import Login from "@/pages/Login";
import Signup from "@/pages/Signup";
import Account from "@/pages/Account";
import Admin from "@/pages/Admin"

import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {path:'/',component: Home},
    {path:'/login',component: Login},
    {path:'/signup',component: Signup},
    {path:'/account',component: Account},
    {path:'/admin',component: Admin},
    {path:'/items',component: Items},
]
const router = createRouter({
    history: createWebHistory(),
    routes : routes
})

export default router;