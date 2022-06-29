//导入路由
import VueRouter from "vue-router";
import UserInfo from "@/components/userInfo";
import Login from "@/page/login";
import Home from "@/components/home";
import companyInfo from "@/components/companyInfo";
import cUserInfo from "@/components/cUserInfo"
import dataLoad from "@/components/dataLoad";
import dataStatistics from "@/components/dataStatistics";
import dataAnalysis from "@/components/dataAnalysis";
import uDataSearch from "@/components/uDataSearch"
import cDataSearch from "@/components/cDataSearch"
import DataDown from "@/components/dataDown";
//配置路由
let router = new VueRouter({
    routes:[
        {path: '/',redirect:"/login"},
        {path:'/index',name:'index',component:Home,children:[
                {
                    path:'/index/userInfo',
                    component:UserInfo
                },
                {
                  path: '/index/companyInfo',
                  component: companyInfo
                },
                {
                  path: '/index/cUserInfo',
                  component: cUserInfo
                },
                {
                  path: '/index/dataLoad',
                  component: dataLoad
                },
                {
                    path: '/index/dataDown',
                    component: DataDown
                },
                {
                  path: '/index/dataStatistics',
                  component: dataStatistics
                },
                {
                  path: '/index/dataAnalysis',
                  component: dataAnalysis
                },
                {
                  path: '/index/uDataSearch',
                  component: uDataSearch
                },
                {
                  path: '/index/cDataSearch',
                  component: cDataSearch
                },
            ]},
        {path:'/login',name:'login',component:Login},
    ],
    // model:history
})
router.beforeEach((to,from,next)=>{
    if (to.path==='/login')
        return next();
    const store = window.sessionStorage.getItem("storeData")
    if (!store)
        return next('login');
    next();
})
//最后一定要导出路由，在main.js中还需要这个router对象
export default router

