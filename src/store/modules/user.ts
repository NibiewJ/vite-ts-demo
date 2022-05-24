import { Module } from "vuex";

interface StoreUser {
    /**
     * 手机号
     */
    mobile: string,
    /**
     * 资金账号
     */
    fundAccount: string,
    /**
     * 客户号
     */
    userCode: string,
    /**
     * 自选股列表
     */
    selfStockList: string[],
    /**
     * 用户手机号登录凭证
     */
    userToken: string,
    /**
     * 唯一编号
     */
    uniqueId: string,

}

const store: Module<StoreUser, unknown> = {
    namespaced: true,
    state() {
        return {
            mobile: "",
            fundAccount: "",
            userCode: "",
            selfStockList: [],
            userToken: "",
            uniqueId: "",

        }
    },
    mutations: {
        setUser(state: StoreUser, payload: AnyObject) {
            state.mobile = payload.mobile;
            state.fundAccount = payload.fundAccount;
            state.userCode = payload.userCode;
            state.selfStockList = payload.selfStockList;
            state.userToken = payload.userToken;
        }
    },
    actions: {
        readUserInfo(context, payload: AnyObject) {

            context.commit("setText", payload);
        }
    },
    getters: {
        getUserInfo(state: StoreUser) {
            return state
        }
    }
}

export default store
