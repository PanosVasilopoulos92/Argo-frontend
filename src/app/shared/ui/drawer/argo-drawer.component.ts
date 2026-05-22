import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { NgIf } from '@angular/common';
import { ArgoIconComponent } from '../icon/argo-icon.component';

/**
 *   <argo-drawer crumb="Freight · INV-2026-0418"
 *                title="$1,485,200 USD" (close)="...">
 *     <!-- drawer-section blocks as content -->
 *   </argo-drawer>
 */
@Component({
  selector: 'argo-drawer',
  standalone: true,
  imports: [NgIf, ArgoIconComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="drawer">
      <div class="drawer-head">
        <div style="display:flex; justify-content:space-between; align-items:flex-start">
          <div>
            <div class="crumb" *ngIf="crumb">{{ crumb }}</div>
            <h2 *ngIf="title">{{ title }}</h2>
          </div>
          <div style="display:flex; gap:4px">
            <ng-content select="[argoDrawerActions]"></ng-content>
            <button class="btn icon ghost" (click)="close.emit()" title="Close">
              <argo-icon name="Close" [size]="15"></argo-icon>
            </button>
          </div>
        </div>
        <ng-content select="[argoDrawerSubhead]"></ng-content>
      </div>
      <div class="drawer-body">
        <ng-content></ng-content>
      </div>
    </div>
  `,
})
export class ArgoDrawerComponent {
  @Input() crumb?: string;
  @Input() title?: string;
  @Output() close = new EventEmitter<void>();
}
