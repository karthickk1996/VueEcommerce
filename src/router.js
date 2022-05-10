import {createRouter, createWebHistory} from "vue-router";
import Products from "./pages/Products.vue";
const router = createRouter({
    history: createWebHistory(),
    routes:[
        {
            path: '/',
            component: Products,
            name: 'products',
        },
    ]
})

export default router;