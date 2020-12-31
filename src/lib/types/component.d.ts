import { App } from 'vue';

export class HaloComponent {
  static name: string;

  static install: (app: App) => any;

  $props: Record<string, any>;
}