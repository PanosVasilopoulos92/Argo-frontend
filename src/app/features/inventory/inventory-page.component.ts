import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { NgFor, DecimalPipe } from '@angular/common';
import { InventoryItemService } from '../../core/services/inventory.service';
import { InventoryItem } from '../../core/models';

@Component({
  selector: 'argo-inventory-page',
  standalone: true,
  imports: [NgFor, DecimalPipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="page">
      <div class="page-head">
        <div><div class="crumb">Back office · Inventory</div><h1>Procurement &amp; spares</h1></div>
      </div>
      <div class="card">
        <table class="tbl">
          <thead>
            <tr>
              <th>SKU</th><th>Description</th><th>Location</th>
              <th class="num">On hand</th><th class="num">Min</th>
              <th class="num">On order</th><th class="num">Unit value</th><th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr *ngFor="let it of rows()">
              <td class="mono">{{ it.sku }}</td>
              <td>{{ it.description }}</td>
              <td class="muted">{{ it.location }}</td>
              <td class="num">{{ it.stock }}</td>
              <td class="num muted">{{ it.min }}</td>
              <td class="num">{{ it.onOrder }}</td>
              <td class="num">${{ it.unitValue | number }}</td>
              <td>{{ it.status }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  `,
})
export class InventoryPageComponent {
  private readonly svc = inject(InventoryItemService);
  readonly rows = toSignal(this.svc.list(), { initialValue: [] as InventoryItem[] });
}
