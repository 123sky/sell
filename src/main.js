import App from './App';
// 0. 如果使用模块化机制编程，導入Vue和VueRouter，要调用 Vue.use(VueRouter)
import Vue from 'vue';
import Router from 'vue-router';
import VueResource from 'vue-resource';
import './common/stylus/index.styl';
// 1. 定义（路由）组件。
// 可以从其他文件 import 进来
import Goods from './components/goods/goods.vue';
import Ratings from './components/ratings/ratings.vue';
import Seller from './components/seller/seller.vue';

Vue.config.productionTip = false;
Vue.use(Router);
Vue.use(VueResource);

// 2. 定义路由
// 每个路由应该映射一个组件。 其中"component" 可以是
// 通过 Vue.extend() 创建的组件构造器，
// 或者，只是一个组件配置对象。
// 我们晚点再讨论嵌套路由。
const routes = [
    { path: '*', redirect: '/goods' },
    { path: '/goods', component: Goods },
    { path: '/ratings', component: Ratings },
    { path: '/seller', component: Seller }
];

// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
const router = new Router({
    routes, // （缩写）相当于 routes: routes
    linkActiveClass: 'active'
});

// 4. 创建和挂载根实例。
// 记得要通过 router 配置参数注入路由，
// 从而让整个应用都有路由功能
/* new一个对象应该赋值给某个变量，但vue不需要，所以通过注释跳过规则 */
/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: { App }
});
