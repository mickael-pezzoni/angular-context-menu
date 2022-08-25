import {
  Component,
  ComponentRef,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  OnInit,
} from '@angular/core';
import { ContextMenuService } from '../context-menu.service';

@Component({
  selector: 'app-context-menu',
  templateUrl: './context-menu.component.html',
  styleUrls: ['./context-menu.component.css'],
})
export class ContextMenuComponent implements OnInit {
  @HostBinding('style.left.px')
  @Input()
  x = 0;

  @HostBinding('style.top.px')
  @Input()
  y = 0;
  constructor() {}

  ngOnInit() {}

  /*@HostListener('window:click') private onClick(): void {
    this.contextMenuService.destroy();
  }*/
}
