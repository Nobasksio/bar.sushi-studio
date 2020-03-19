const axios = require('axios').default;

export default {
    state: {
        activePageTopMenu: 'photo',
        bars: []
    },
    actions: {
        fetchBars ({ commit }) {
            return new Promise((resolve, reject) => {
                axios.get(`http://185.22.61.189:1337/bars/`)
                    .then(response => {
                        commit('setBars', response.data);
                        resolve(response)
                    })
                    .catch(error => {
                        reject(error)
                    })
            });
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
        bars (state) {
            return state.bars
        }
    }
}