import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ArgoIconComponent } from '../icon/argo-icon.component';
import { ArgoSparklineComponent } from '../sparkline/argo-sparkline.component';

@Component({
  selector: 'argo-kpi-card',
  standalone: true,
  imports: [ArgoIconComponent, ArgoSparklineComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="kpi">
      <div class="label">
        <argo-icon *ngIf="icon" [name]="icon" [size]="13"></argo-icon>
        {{ label }}
      </div>
      <div class="value">
        {{ value }}<span *ngIf="unit" style="font-size:18px;color:var(--text-mute)">{{ unit }}</span>
      </div>
      <div class="sub" *ngIf="sub">
        <span *ngIf="trend" [class]="'trend ' + trend">{{ trend === 'up' ? '▲' : '▼' }} {{ trendValue }}</span>
        {{ sub }}
      </div>
      <argo-sparkline *ngIf="sparkData?.length" [data]="sparkData!" [color]="sparkColor"></argo-sparkline>
    </div>
  `,
})
export class ArgoKpiCardComponent {
  @Input({ required: true }) label!: string;
  @Input({ required: true }) value!: string | number;
  @Input() unit?: string;
  @Input() sub?: string;
  @Input() icon?: string;
  @Input() trend?: 'up' | 'down';
  @Input() trendValue?: string;
  @Input() sparkData?: number[];
  @Input() sparkColor?: string;
}
