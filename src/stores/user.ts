import { defineStore } from 'pinia'
import { ref } from 'vue'


export const useUserStore = defineStore('user', () => {
  const userPosition = ref<number[]>([0, 0])

  function callbackSuccessPosition(position: GeolocationPosition) {
    userPosition.value = [position.coords.latitude, position.coords.longitude]
  }

  function callbackErrorPosition(error: GeolocationPositionError) {
    console.log(error)
  }

  function getUserPosition() {
    const options = {
      enableHighAccuracy: true,
      timeout: 5000,
    }
    navigator.geolocation.watchPosition(callbackSuccessPosition, callbackErrorPosition, options)
  }

  return { userPosition, getUserPosition }

})