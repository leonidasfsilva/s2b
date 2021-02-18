import { API_URL } from "../../../config/configs"

export default {
    state: {
        
    },

    actions: {
        reportsProducts (context, params) {
            context.commit('PRELOADER', true)

            return axios.get(`${API_URL}reports-products`, {params})
                            .finally(() => context.commit('PRELOADER', false))
        }
    }
}