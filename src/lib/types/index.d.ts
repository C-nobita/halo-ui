/* eslint-disable max-classes-per-file */
import { App } from 'vue';
import { VanComponent } from './component';
import { Aside } from "./Aside"
import { Button } from "./Button"
import { Dialog } from "./Dialog"
import { Dropdown } from "./Dropdown"
import { Header } from "./Header"


// export const version: string;

export const install: (app: App) => any;

// export class Aside extends VanComponent { }
// export class Button extends VanComponent { }
// export class Dialog extends VanComponent { }
// export class Dropdown extends VanComponent { }
// export class Header extends VanComponent { }


export {
  Aside,
  Button,
  Dialog,
  Dropdown,
  Header
};
