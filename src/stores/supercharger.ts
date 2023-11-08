import {defineStore} from 'pinia'
import {injectStrict} from '@/utils/injectTyped'
import {AxiosKey} from '@/conf/axios'

export const useSuperChargerStore = defineStore('superchargeur', () => {
    const axios = injectStrict(AxiosKey)

    async function getSuperchargers() {
        let superchargers = [];

        const {data} = await axios.get('/supercharger')
        superchargers = data;
        return superchargers;
    }

    return {getSuperchargers}
})
