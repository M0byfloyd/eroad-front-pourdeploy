import { defineStore } from 'pinia'
import { injectStrict } from '@/utils/injectTyped'
import { AxiosKey } from '@/conf/axios'
import { useUserStore } from './user'
import { ref } from 'vue'
import type { Supercharger } from './types'

export const useSuperChargerStore = defineStore('superchargeur', () => {
    const axios = injectStrict(AxiosKey)

    const nearest = ref<Supercharger[]>([])

    async function getSuperchargers() {
        let superchargers = [];

        const { data } = await axios.get('/supercharger')
        superchargers = data;
        return superchargers;
    }

    const getSuperchargerNearestUser = async () => {
        const userPosition = useUserStore().userPosition
        // get les superchargeurs les plus proches de l'utilisateur
        const { data } = await axios.get(`/supercharger/nearest/${userPosition[0]}/${userPosition[1]}`)
        if (data) {
            nearest.value = data
        }
    }

    return { 
        nearest,
        getSuperchargers, 
        getSuperchargerNearestUser 
    }
})
