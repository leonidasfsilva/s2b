import axios from 'axios'
import {API_URL} from '../../../config/configs'

const RESOURCE = 'products'

const CONFIGS = {
    headers: {
        'content-type': 'multipart/form-data',
    }
}

export default {
    loadProducts(context, params) {
        context.commit('PRELOADER', true)

        axios.get(`${API_URL}${RESOURCE}`, {params})
            .then(response => context.commit('LOAD_PRODUCTS', response.data))
            .catch(error => console.log(error))
            .finally(() => context.commit('PRELOADER', false))
    },

    loadProduct(context, id) {
        context.commit('PRELOADER', true)

        return new Promise((resolve, reject) => {
            axios.get(`${API_URL}${RESOURCE}/${id}`)
                .then(response => resolve(response.data))
                .catch(error => reject())
                .finally(() => context.commit('PRELOADER', false))
        })
    },

    storeProduct(context, formData) {
        context.commit('PRELOADER', true)

        return new Promise((resolve, reject) => {
            axios.post(`${API_URL}${RESOURCE}`, formData, CONFIGS)
                .then(response => resolve())
                .catch(error => {
                    context.commit('PRELOADER', false)

                    reject(error.response)
                })
            // .finally(() => context.commit('PRELOADER', false))
        })
    },


    updateProduct(context, formData) {
        context.commit('PRELOADER', true)

        formData.append('_method', 'PUT')

        return new Promise((resolve, reject) => {
            axios.post(`${API_URL}${RESOURCE}/${formData.get('id')}`, formData)
                .then(response => resolve())
                .catch(error => {
                    context.commit('PRELOADER', false)
                    reject(error.response)
                })
            // .finally(() => context.commit('PRELOADER', false))
        })
    },


    destroyProduct(context, id) {
        context.commit('PRELOADER', true)

        return new Promise((resolve, reject) => {
            axios.delete(`${API_URL}${RESOURCE}/${id}`)
                .then(response => resolve())
                .catch(error => {
                    reject()

                    context.commit('PRELOADER', false)
                })
            // .finally(() => context.commit('PRELOADER', false))
        })
    }
}