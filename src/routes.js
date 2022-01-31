import {createWebHistory, createRouter} from 'vue-router';

const routes = [
    {
        name: 'Homepage',
        path: '/',
        component: () => import('@/pages/Homepage')
    },
    {
        name: 'About',
        path: '/about',
        component: () => import('@/pages/About')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    if (to.path === '/') {
        document.title = 'drawbu';
    } else {
        document.title = `drawbu - ${to.name}`;
    }
    next()
})

export default router;
