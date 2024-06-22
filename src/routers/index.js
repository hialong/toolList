
import { createMemoryHistory,createWebHashHistory,createRouter } from 'vue-router';
import BoxCarton from "@/components/box/boxCarton.vue";
import genPic from "@/components/genPic/genPic.vue";
const routes=[
    {
        path: '/',
        redirect: '/home',
    },
    {
        path: '/home', //链接路径
        name: 'home',
        component: () => import('@/pages/Home.vue'),
    },//配置路由，这里是个数组
    {                    //每一个链接都是一个对象
        path: '/boxCartoon',         //链接路径
        name: 'boxCartoon',     //路由名称，
        component: BoxCarton,   //对应的组件模板
    },
    {
        path: '/genPic',
        component: genPic,
        // children: [        //子路由,嵌套路由 （目前是随便写的，免得单独再列一点）
        //     {path: '/', component: Hi},
        //     {path: 'hi1', component: Hi1},
        //     {path: 'hi2', component: Hi2},
        // ]
    }
]

// 路由
export const router = createRouter({
    history: createWebHashHistory(),
    routes,
})


