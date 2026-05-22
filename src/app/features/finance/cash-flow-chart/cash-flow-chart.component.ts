import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { NgFor } from '@angular/common';

export interface CashFlowWeek { w: string; inflow: number; outflow: number; }

@Component({
  selector: 'argo-cash-flow-chart',
  standalone: true,
  imports: [NgFor],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="card">
      <div class="card-head">
        <h3>Cash Flow — Last 8 Weeks</h3>
        <div class="meta">USD millions · all currencies</div>
      </div>
      <div style="padding:16px 18px">
        <div style="display:flex; gap:24px; align-items:flex-end; height:140px">
          <div *ngFor="let w of weeks" style="flex:1; display:flex; flex-direction:column; align-items:center; gap:6px">
            <div style="display:flex; align-items:flex-end; gap:3px; height:110px; width:100%; justify-content:center">
              <div [style.width.px]="14"
                   [style.height.%]="(w.inflow / max()) * 100"
                   style="background:var(--accent); border-radius:2px 2px 0 0; min-height:4px"></div>
              <div [style.width.px]="14"
                   [style.height.%]="(w.outflow / max()) * 100"
                   style="background:var(--text-faint); opacity:0.55; border-radius:2px 2px 0 0; min-height:4px"></div>
            </div>
            <div style="font-size:10.5px; color:var(--text-mute); font-family:var(--font-mono)">{{ w.w }}</div>
          </div>
        </div>
        <div style="display:flex; gap:16px; margin-top:12px; font-size:11.5px; color:var(--text-mute)">
          <div style="display:flex; align-items:center; gap:6px">
            <span style="width:10px;height:10px;background:var(--accent);border-radius:2px"></span> Inflow
          </div>
          <div style="display:flex; align-items:center; gap:6px">
            <span style="width:10px;height:10px;background:var(--text-faint);opacity:0.55;border-radius:2px"></span> Outflow
          </div>
        </div>
      </div>
    </div>
  `,
})
export class CashFlowChartComponent {
  @Input() weeks: CashFlowWeek[] = [
    { w: 'W14', inflow: 2.4, outflow: 1.8 },
    { w: 'W15', inflow: 1.9, outflow: 2.2 },
    { w: 'W16', inflow: 3.1, outflow: 2.0 },
    { w: 'W17', inflow: 2.8, outflow: 1.6 },
    { w: 'W18', inflow: 3.6, outflow: 2.4 },
    { w: 'W19', inflow: 2.2, outflow: 2.8 },
    { w: 'W20', inflow: 3.9, outflow: 2.1 },
    { w: 'W21', inflow: 4.1, outflow: 2.6 },
  ];
  max(): number {
    return Math.max(...this.weeks.flatMap(w => [w.inflow, w.outflow]));
  }
}
