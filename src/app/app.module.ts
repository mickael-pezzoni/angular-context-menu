import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { AppComponent } from './app.component';
import { MatMenuModule } from '@angular/material/menu';
import { ContextMenuDirective } from './context-menu.directive';
import { ContextMenuComponent } from './context-menu/context-menu.component';
@NgModule({
  declarations: [AppComponent, ContextMenuDirective, ContextMenuComponent],
  imports: [BrowserModule, MatMenuModule, MatButtonModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
