import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const router = new Router({
    mode: "hash",
    routes: [
        {
            path: "/imgText",
            name: "imgText",
            component: () => import("@/view/main/imgText")
        },
        {
            path: "/commodity",
            name: "commodity",
            component: () => import("@/view/main/commodity")
        },
        {
            path: "/consultation",
            name: "consultation",
            component: () => import("@/view/main/consultation")
        },
        {
            path: "/knowledge",
            name: "knowledge",
            component: () => import("@/view/main/knowledge")
        }
    ]
});

router.beforeEach((to, from, next) => {
    next();
});

export default router;
