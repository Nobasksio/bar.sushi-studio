const axios = require('axios').default;

export default {
    state: {
        feedbacks: []
    },
    actions: {
        sendFeedback ({ getters }, data) {
            return new Promise((resolve, reject) => {
                axios.post(`${getters.getApiBaseUrl}/feedbacks/`, data)
                    .then(response => {
                        resolve(response)
                    })
                    .catch(error => {
                        reject(error)
                    })
            })
        },
        async fetchFeedback ({ getters, commit }, param = '') {
            try {
                const feedback = await axios.get(`${getters.getApiBaseUrl}/feedbacks${param}`);
                const result = await feedback.data;
                commit('setFeedbacks', result)
            } catch (e) {
                throw e
            }
        }
    },
    mutations: {
        setFeedbacks: (state, data) => state.feedbacks = data
    },
    getters: {
        getFeedbaks: state => state.feedbacks
    }
}
