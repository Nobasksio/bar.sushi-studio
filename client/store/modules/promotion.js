const axios = require('axios').default;

export default {
    state: {
        promotions: [],
        promotion: {}
    },
    actions: {
        async fetchPromotion ({ getters, commit }, id) {
            try {
                const promotion = await axios.get(`${getters.getApiBaseUrl}/promotions/${id}`);
                const result = await promotion.data;
                commit('setPromotion', result)
            } catch (e) {
                throw e
            }
        },
        async fetchPromotions ({ getters, commit }) {
            try {
                const promotions = await axios.get(`${getters.getApiBaseUrl}/promotions`);
                const result = await promotions.data;
                commit('setPromotions', result)
            } catch (e) {
                throw e
            }
        }
    },
    mutations: {
        setPromotion: (state, data) => state.promotion = data,
        setPromotions: (state, data) => state.promotions = data,
    },
    getters: {
        getPromotion: state => state.promotion,
        getPromotions: state => state.promotions
    }
}
