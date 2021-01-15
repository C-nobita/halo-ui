import { createVNode, render, nextTick } from 'vue';
import DialogConstructor from './src/index.vue';
let vm;
let $el;
export function close() {
  setTimeout(() => {
    render(null, $el);
    nextTick(() => {
      document.body.removeChild($el)
    })
  }, 300)
}
export default function createDialogInstance(options = {}) {
  const container = document.createElement('div')
  const visible = true;
  const onClose = () => {
    options.onClosed && options.onClosed();
    close();
  };
  const dialogProps = { ...options, visible, onClose, oneTime: true }

  vm = createVNode(
    DialogConstructor,
    dialogProps,
    {}
  )
  render(vm, container)
  $el = container
  document.body.appendChild(container)

  return {
    close,
  }
}