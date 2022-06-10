import {createRouter, createWebHashHistory} from "vue-router"

import store, {useStore} from "../store";
import {pageView} from "../sensors";

const st = useStore();


const router = createRouter({
    history: createWebHashHistory(),
    routes: [
		{
			path: '/index',
			name: 'Index',
			component: () => import(`../views/Index.vue`),
			meta: {
				pageName: '领券中心'
			}
		},
		{
			path: '/history-tickets',
			name: 'HistoryTickets',
			component: () => import(`../views/HistoryTickets.vue`),
			meta: {
				pageName: '历史领券记录'
			}
		},
		{
			path: '/my-tickets',
			name: 'MyTickets',
			component: () => import(`../views/MyTickets.vue`),
			meta: {
				pageName: '我的优惠券'
			}
		},
	]
})

/**
 * 神策页面跳转的PageView事件
 */
router.beforeEach((to, from, next) => {
	// 进入页面时间初始化
	store.commit('pageView/setPageStartTime', (new Date()).getTime());
	// 没有保存页面来源
	if(store.getters["pageView/getPageFrom"] == "") {
		store.commit('pageView/setPageFrom', '默认页面来源');
	}
	// 有页面来源的时候进行设置状态管理
	if (to.query.page_from) {
		store.commit('pageView/setPageFrom', to.query.page_from);
	}
	// 框架内页面内跳转页面的来源设置
	if (from.meta.pageName) {
		store.commit('pageView/setPageFrom', from.meta.pageName);
	}
	pageView({
		Page_from: store.getters["pageView/getPageViewInfo"].pageFrom,
		page_title: to.meta.pageName
	});
	next()
})

export default router;
