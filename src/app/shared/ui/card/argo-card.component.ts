import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'argo-card',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="card">
      <div class="card-head" *ngIf="title || meta">
        <h3 *ngIf="title">{{ title }}</h3>
        <div class="meta" *ngIf="meta">{{ meta }}</div>
      </div>
      <ng-content></ng-content>
    </div>
  `,
})
export class ArgoCardComponent {
  @Input() title?: string;
  @Input() meta?: string;
}
