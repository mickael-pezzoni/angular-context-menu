import { MatMenuModule } from '@angular/material/menu';

import { ContextMenuComponent } from './context-menu.component';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [ContextMenuComponent],
  imports: [
    CommonModule,
  ],
})
export class ContextMenuModule { }
