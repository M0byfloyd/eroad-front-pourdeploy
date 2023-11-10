import axios, { type AxiosInstance } from 'axios'
import type { InjectionKey } from 'vue'

const instance: AxiosInstance = axios.create({
  baseURL: 'https://eroad-back.netlify.app:3000/',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json'
  }
})

// global conf
export const AxiosKey: InjectionKey<AxiosInstance> = Symbol('http')
// instance conf
export default instance
