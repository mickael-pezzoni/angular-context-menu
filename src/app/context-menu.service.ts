import { ComponentRef, Injectable } from '@angular/core';
import { ContextMenuComponent } from './context-menu/context-menu.component';

@Injectable({ providedIn: 'root' })
export class ContextMenuService {
  private contextMenuRef?: ComponentRef<ContextMenuComponent>;

  constructor() {}

  setRef(contextMenuRef: ComponentRef<ContextMenuComponent>): void {
    this.contextMenuRef = contextMenuRef;
  }

  destroy(): void {
    this.contextMenuRef?.destroy();
  }
}
