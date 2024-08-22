import { Component, ComponentRef, ViewChild, ViewContainerRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { OnHoverDynamicComponent } from './on-hover-dynamic/on-hover-dynamic.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  template: `
  <div (mouseenter) ="mouseEnter('div a') "  (mouseleave) ="mouseLeave('div A')">
        <h2>Div A</h2>
 </div>
 <div (mouseenter) ="mouseEnter('div b')"  (mouseleave) ="mouseLeave('div B')">
        <h2>Div B</h2>
 </div>

 <ng-container #onHoverComponent>
 </ng-container>

  `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  @ViewChild('onHoverComponent', {read: ViewContainerRef, static: false}) private onHoverComponent?: ViewContainerRef;
  componentRef?: ComponentRef<OnHoverDynamicComponent>;
  constructor() {}
  mouseEnter(div: string) {
    this.componentRef = this.onHoverComponent?.createComponent(OnHoverDynamicComponent)
    console.log('mouse enter : ' + div);
  }

  mouseLeave(div: string) {
  }
}
