declare module '*.vue' {
  import { ComponentOptions, App } from 'vue'
  interface myComponentOpntions extends ComponentOptions {
    install: (app: App) => void;
  }
  const componentOptions: myComponentOpntions
  export default componentOptions
}

declare module '*.md' {
  const str: string
  export default str
}
