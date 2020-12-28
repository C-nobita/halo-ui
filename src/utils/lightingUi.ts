import { App } from 'vue'
import { Button, Header, Dialog, Aside } from "../lib"
export default function haloUi(app: App) {
  return app.use(Button).use(Header).use(Dialog).use(Aside)
}