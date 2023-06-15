import Api from '@/services/Api.js'

export default {
    register (credentials) {
        return Api().post('/api/clients/addClient',credentials)
    }
}

