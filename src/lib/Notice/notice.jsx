import { createVNode, render, nextTick } from 'vue';
import NoticeConstructor from './src/index.vue';
let seed = 0;
let queue = []
let vm;

export function close({ id: targetId, $el }) {
  let offset = 0;
  $el.style.transform = 'translateX(0)';
  $el.style.opacity = '0';
  queue = queue.filter(({ id }) => id !== targetId);

  queue.forEach(({ $el }) => {
    offset += 16;
    $el.style.top = offset + 'px';
    offset += $el.offsetHeight;
  });
  setTimeout(() => {
    render(null, $el);
    nextTick(() => {
      document.body.removeChild($el);
    });
  }, 500);

}

export default function createNotificationInstance(options = {}) {
  let offset = 0;
  queue.forEach(({ $el }) => {
    offset += $el.offsetHeight + 16;
  });
  offset += 16;
  const id = 'notification_' + seed++;

  const container = document.createElement('div');
  container.className = 'notification_contianer';
  container.style.top = offset + 'px';
  container.style.opacity = '1';
  container.style.left = '100%';

  options.render = () => {
    container.style.transform = 'translateX(calc(-100% - 16px))';
  };
  options.cancel = close.bind(null, { id, $el: container });

  vm = createVNode(
    NoticeConstructor,
    options,
    {}
  );
  render(vm, container);
  const target = { vm, $el: container, id };
  queue.push({ vm, $el: container, id });
  document.body.appendChild(container);

  const closeFn = () => {
    close(target);
  };
  return {
    close: closeFn,
  };
};