import { MatMenu, MatMenuTrigger } from '@angular/material/menu';
import {
  Component,
  ComponentRef,
  ElementRef,
  HostBinding,
  HostListener,
  Inject,
  Input,
  OnInit,
  TemplateRef,
  ViewChild,
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

  @Input() template!: TemplateRef<unknown>;

  @HostBinding('style.top.px')
  @Input()
  y = 0;

  constructor(
    private readonly contextMenuService: ContextMenuService) {}

  ngOnInit() {}

  @HostListener('mousedown', ['$event']) private toto(event: MouseEvent): void  {
    event.preventDefault();
    event.stopPropagation();
    console.log('click');
    
  } 

  @HostListener('window:touchstart', ['$event'])
  @HostListener('window:mousedown', ['$event'])
  private onClick(event: MouseEvent | TouchEvent): void {
    console.log(event);
    this.contextMenuService.destroy();
  }
  
}
