import Vue from 'vue'
import VueRouter from 'vue-router'
import CardStack from '../components/CardStack.vue'
import Card from '../components/Card.vue'
import Home from '../components/Home.vue'
import Top from '../components/Top.vue'

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        component: CardStack
    },
    {
        path: '/cardInfo/:id',
        component: Card
    },
    {
        path: '/',
        component: Home
    },
    {
        path: '/',
        component: Top
    }
];

const router = new VueRouter ({
    routes
});

export default router;