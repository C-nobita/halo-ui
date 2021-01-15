import { getCurrentInstance, onBeforeUnmount } from 'vue';
import Dialog from './src/index.vue';
import { mountComponent } from "../utils/mountComponent";
export default function createDialogInstance(props) {
  const { instance, unmount } = mountComponent({
    setup() {
      let timer;
      const onClose = () => {
        props.onClosed && props.onClosed;
        timer = setTimeout(() => {
          unmount();
        }, 600);
      };
      const visible = true;
      const dialogProps = { ...props }
      delete dialogProps.onClose
      getCurrentInstance().render = () => (
        <Dialog {
          ...{
            ...props,
            onClose,
            visible,
            oneTime: true
          }
        } />
      );

      onBeforeUnmount(() => {
        clearTimeout(timer);
      });
      return {
      };
    },
  });

  return instance;
}
