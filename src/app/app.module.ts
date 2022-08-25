import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { AppComponent } from './app.component';
import { MatMenuModule } from '@angular/material/menu';
import { ContextMenuDirective } from './context-menu.directive';
import { ContextMenuComponent } from './context-menu/context-menu.component';
import {MatIconModule} from '@angular/material/icon'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [AppComponent, ContextMenuDirective, ContextMenuComponent],
  imports: [BrowserModule, MatMenuModule, MatButtonModule, MatIconModule, BrowserAnimationsModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
