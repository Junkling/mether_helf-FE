import Home from "@/pages/Home";
// import Items from "@/pages/Items";
import Login from "@/pages/Login";
import Signup from "@/pages/Signup";
import Account from "@/pages/user/Account";
import AdminUser from "@/pages/admin/AdminUser";
import AdminItem from "@/pages/admin/AdminItem";
import AdminFirstCategory from "@/pages/admin/AdminFirstCategory";
import AdminSecondCategory from "@/pages/admin/AdminSecondCategory";
import ItemDetail from "@/pages/admin/ItemDetail";
import FirstCategoryDetail from "@/pages/admin/FirstCategoryDetail";
import SecondCategoryDetail from "@/pages/admin/SecondCategoryDetail";
import CreateItem from "@/pages/admin/CreateItem";
import Create1stCategory from "@/pages/admin/Create1stCategory";
import Create2ndCategory from "@/pages/admin/Create2ndCategory";
import Admin from "@/pages/admin/Admin";
import Cart from "@/pages/user/Cart";
import MyInfo from "@/pages/user/MyInfo";
import Orders from "@/pages/user/Orders";
import Index from "@/pages/Index";
import Fack from "@/pages/Fack";



import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    { path: '/', component: Fack },
    { path: '/murthehelp', component: Index },
    { path: '/murthehelp/items/:role', component: Home, name : 'Home', props: true },
    { path: '/murthehelp/login', component: Login},
    { path: '/murthehelp/signup', component: Signup ,name : 'Signup'},
    { path: '/murthehelp/account', component: Account },
    { path: '/murthehelp/admin/users', component: AdminUser ,name :"AdminUser" , props: true },
    { path: '/murthehelp/admin/items', component: AdminItem , name :"AdminItem" ,props: true ,},
    { path: '/murthehelp/admin/first_categories', component: AdminFirstCategory , name :"AdminFirstCategory"  , props: true },
    { path: '/murthehelp/admin/second_categories', component: AdminSecondCategory, name :"AdminSecondCategory" , props: true },
    { path: '/murthehelp/admin', component: Admin , name : 'Admin'},
    // { path: '/items', component: Items },
    { path: '/murthehelp/cart', component: Cart },
    
    { path: '/murthehelp/orders', component: Orders ,name : 'Orders' , props: true },
    { path: '/murthehelp/my', component: MyInfo },
    { path: '/murthehelp/admin/item/:itemId', component: ItemDetail, props: true },
    { path: '/murthehelp/admin/first_category/:firstCategoryId', component: FirstCategoryDetail, props: true },
    { path: '/murthehelp/admin/second_category/:secondCategoryId', component: SecondCategoryDetail, props: true },
    { path: '/murthehelp/admin/items/add', component: CreateItem },
    { path: '/murthehelp/admin/first_categories/add', component: Create1stCategory },
    { path: '/murthehelp/admin/second_categories/add', component: Create2ndCategory }
]
const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;