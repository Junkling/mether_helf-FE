import Home from "@/pages/Home";
import Items from "@/pages/Items";
import Login from "@/pages/Login";
import Signup from "@/pages/Signup";
import Account from "@/pages/user/Account";
import AdminUser from "@/pages/admin/AdminUser";
import AdminItem from "@/pages/admin/AdminItem";
import AdminFirstCategory from "@/pages/admin/AdminFirstCategory";
import AdminSecondCategory from "@/pages/admin/AdminSecondCategory";
import ItemDetail from "@/pages/admin/ItemDetail";
import CreateItem from "@/pages/admin/CreateItem";
import Admin from "@/pages/admin/Admin";
import Cart from "@/pages/user/Cart";
import MyInfo from "@/pages/user/MyInfo";
import Orders from "@/pages/user/Orders";



import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {path:'/',component: Home},
    {path:'/login',component: Login},
    {path:'/signup',component: Signup},
    {path:'/account',component: Account},
    {path:'/admin/users',component: AdminUser},
    {path:'/admin/items',component: AdminItem},
    {path:'/admin/first_categories',component: AdminFirstCategory},
    {path:'/admin/second_categories',component: AdminSecondCategory},
    {path:'/admin',component: Admin},
    {path:'/items',component: Items},
    {path:'/cart',component: Cart},
    {path:'/orders',component: Orders},
    {path:'/my',component: MyInfo},
    {path:'/admin/item/:itemId', component: ItemDetail, props: true },
    {path:'/admin/items/add', component: CreateItem}
]
const router = createRouter({
    history: createWebHistory(),
    routes : routes
})

export default router;