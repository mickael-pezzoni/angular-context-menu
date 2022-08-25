import { MatMenu } from '@angular/material/menu';
import {
  Compiler,
  ComponentFactoryResolver,
  Directive,
  ElementRef,
  EventEmitter,
  HostListener,
  InjectionToken,
  Injector,
  Input,
  Output,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
import { Subject, timer } from 'rxjs';
import { filter } from 'rxjs/operators';
import { ContextMenuService } from './context-menu.service';
import { ContextMenuComponent } from './context-menu/context-menu.component';

export interface ContextMenuEvent {
  x: number;
  y: number;
}
@Directive({
  selector: '[appContextMenu]',
})
export class ContextMenuDirective {
  isTouched = false;
  @Input() delay = 500;
  @Output() readonly contextMenu = new EventEmitter<void>();
  @Input() template!: TemplateRef<unknown>;
  event?: TouchEvent;
  private readonly isDestroyed$ = new Subject();

  constructor(
    private readonly viewContainerRef: ViewContainerRef,
    private readonly elementRef: ElementRef,
    private readonly compiler: Compiler,
    // private readonly injector: Injector,
    private readonly componentFactoryResolver: ComponentFactoryResolver,
    private readonly contextMenuService: ContextMenuService
  ) {}

  @HostListener('contextmenu', ['$event']) private onContextMenu(
    event: MouseEvent
  ): void {
    if (true) {
      event.preventDefault();
      event.stopPropagation();
      this.contextMenu.emit();
      this.open({
        x: event.clientX,
        y: event.clientY,
      });
    }
  }

  // tslint:disable-next-line: no-unsafe-any
  @HostListener('touchmove', ['$event']) private onToucheMove(): void {
    this.isTouched = false;
  }

  // tslint:disable-next-line: no-unsafe-any
  @HostListener('touchstart', ['$event']) private onTouchStart(
    event: TouchEvent
  ): void {
    this.isTouched = true;
    this.contextMenuService.destroy();
    event.stopPropagation();
    timer(this.delay)
      .pipe(filter(() => this.isTouched))
      .subscribe(() => {
        this.isTouched = false;
        this.contextMenu.emit();
      });
  }

  // tslint:disable-next-line: no-unsafe-any
  @HostListener('touchend', ['$event']) private onTouchEnd(
    event: TouchEvent
  ): void {
    if (this.isTouched) {
      this.elementRef.nativeElement.dispatchEvent(new Event('click'));
    }
    this.isTouched = false;
  }

  private open(event: ContextMenuEvent): void {
      const contextMenuFactory =this.componentFactoryResolver.resolveComponentFactory(
        ContextMenuComponent
      );
    const contextMenuRef =
      this.viewContainerRef.createComponent(contextMenuFactory);

    contextMenuRef.instance.x = event.x;
    contextMenuRef.instance.y = event.y;
    contextMenuRef.instance.template = this.template;
    // const module = await this.compiler.compileModuleAsync(MatMenu);
    this.contextMenuService.setRef(contextMenuRef);
  }

  ngOnDestroy(): void {
    this.isDestroyed$.next(true);
    this.isDestroyed$.complete();
  }
}
