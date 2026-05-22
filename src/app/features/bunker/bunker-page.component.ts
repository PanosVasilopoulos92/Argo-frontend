import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { NgFor, DecimalPipe } from '@angular/common';
import { BunkerOrderService } from '../../core/services/bunker.service';
import { BunkerOrder } from '../../core/models';

@Component({
  selector: 'argo-bunker-page',
  standalone: true,
  imports: [NgFor, DecimalPipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="page">
      <div class="page-head">
        <div><div class="crumb">Commercial · Bunker</div><h1>Bunker management</h1></div>
      </div>
      <div class="card">
        <table class="tbl">
          <thead>
            <tr>
              <th>Order</th><th>Vessel</th><th>Port</th><th>Supplier</th>
              <th>Grade</th><th class="num">Qty (MT)</th><th class="num">Price</th>
              <th>Date</th><th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr *ngFor="let o of rows()">
              <td class="mono">{{ o.id }}</td>
              <td>{{ o.vessel }}</td>
              <td class="muted">{{ o.port }}</td>
              <td>{{ o.supplier }}</td>
              <td>{{ o.grade }}</td>
              <td class="num">{{ o.qty | number }}</td>
              <td class="num">${{ o.price }}</td>
              <td class="mono">{{ o.date }}</td>
              <td>{{ o.status }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  `,
})
export class BunkerPageComponent {
  private readonly svc = inject(BunkerOrderService);
  readonly rows = toSignal(this.svc.list(), { initialValue: [] as BunkerOrder[] });
}
