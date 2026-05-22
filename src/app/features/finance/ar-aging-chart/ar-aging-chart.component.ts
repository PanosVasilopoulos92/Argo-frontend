import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { NgFor, DecimalPipe } from '@angular/common';

export interface AgingBucket { bucket: string; amount: number; count: number; }

@Component({
  selector: 'argo-ar-aging-chart',
  standalone: true,
  imports: [NgFor, DecimalPipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="card">
      <div class="card-head">
        <h3>AR Aging</h3>
        <div class="meta">{{ total() | number }} USD across {{ countTotal() }} invoices</div>
      </div>
      <div style="padding:16px 18px; display:flex; flex-direction:column; gap:12px">
        <div *ngFor="let b of buckets; let i = index">
          <div style="display:flex; justify-content:space-between; align-items:baseline; margin-bottom:4px">
            <div style="font-size:12.5px; color:var(--text-dim)">
              {{ b.bucket }}
              <span style="color:var(--text-faint); margin-left:6px">{{ b.count }}</span>
            </div>
            <div class="mono" style="font-size:12px; font-variant-numeric:tabular-nums">
              ${{ (b.amount / 1000) | number:'1.0-0' }}k
            </div>
          </div>
          <div style="height:6px; background:var(--hairline); border-radius:999px; overflow:hidden">
            <div [style.width.%]="(b.amount / total()) * 100"
                 [style.background]="i >= 3 ? 'var(--rose)' : 'var(--accent)'"
                 style="height:100%; border-radius:999px"></div>
          </div>
        </div>
      </div>
    </div>
  `,
  // Quick fix: the number pipe needs CommonModule. Just import DecimalPipe.
})
export class ArAgingChartComponent {
  @Input() buckets: AgingBucket[] = [
    { bucket: 'Current',   amount: 3_846_500, count: 8 },
    { bucket: '1 – 30 d',  amount: 1_485_200, count: 3 },
    { bucket: '31 – 60 d', amount: 612_300,   count: 2 },
    { bucket: '61 – 90 d', amount: 142_300,   count: 1 },
    { bucket: '> 90 d',    amount: 87_450,    count: 1 },
  ];
  total(): number { return this.buckets.reduce((s, b) => s + b.amount, 0); }
  countTotal(): number { return this.buckets.reduce((s, b) => s + b.count, 0); }
}
