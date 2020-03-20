const axios = require('axios').default;

export default {
    state: {
        activePageTopMenu: 'photo',
        bars: []
    },
    actions: {
        async fetchBars ({ commit, getters }) {
            try {
                const bars = await axios.get(`${getters.getBaseUrl}/bars/`);
                const result = await bars.data;
                commit('setBars', result)
            } catch (e) {
                throw e
            }
        }
    },
    mutations: {
        setActivePageTopMenu (state, value) {
            state.activePageTopMenu = value
        },
        setBars (state, data) {
            state.bars = data
        }
    },
    getters: {
        getPageBar: state => state.activePageTopMenu,
        bars: state => state.bars
    }
}