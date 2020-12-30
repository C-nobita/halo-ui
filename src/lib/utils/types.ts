import { App } from 'vue'

export type ComponentInstall<T> = T & { install(app: App): void; }