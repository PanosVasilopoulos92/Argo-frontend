import { ChangeDetectionStrategy, Component, inject, signal, computed } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { toSignal } from '@angular/core/rxjs-interop';
import { InvoiceService } from '../../core/services/invoice.service';
import { Invoice, InvoiceStatus } from '../../core/models';
import { ArgoIconComponent } from '../../shared/ui/icon/argo-icon.component';
import { ArgoButtonComponent } from '../../shared/ui/button/argo-button.component';
import { ArgoKpiCardComponent } from '../../shared/ui/kpi-card/argo-kpi-card.component';
import { ArgoPillComponent } from '../../shared/ui/pill/argo-pill.component';
import { ArgoFilterBarComponent, FilterChip } from '../../shared/ui/filter-bar/argo-filter-bar.component';
import { InvoiceDrawerComponent } from './invoice-detail/invoice-drawer.component';
import { CashFlowChartComponent } from './cash-flow-chart/cash-flow-chart.component';
import { ArAgingChartComponent } from './ar-aging-chart/ar-aging-chart.component';

@Component({
  selector: 'argo-finance-page',
  standalone: true,
  imports: [
    NgFor, NgIf,
    ArgoIconComponent, ArgoButtonComponent, ArgoKpiCardComponent, ArgoPillComponent,
    ArgoFilterBarComponent, InvoiceDrawerComponent,
    CashFlowChartComponent, ArAgingChartComponent,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="page">
      <div class="page-head">
        <div>
          <div class="crumb">Back office · Finance</div>
          <h1>Invoices &amp; Disbursements</h1>
        </div>
        <div class="actions">
          <argo-button><argo-icon name="Plus" [size]="14"></argo-icon>&nbsp;Export</argo-button>
          <argo-button kind="primary"><argo-icon name="Plus" [size]="14"></argo-icon>&nbsp;New invoice</argo-button>
        </div>
      </div>

      <div class="kpi-row">
        <argo-kpi-card label="AR Outstanding" value="$6.17" unit="M" sub="vs. last month"
                       trend="up" trendValue="4.2%"
                       [sparkData]="[3.8, 4.1, 4.6, 5.0, 4.8, 5.4, 5.9, 6.17]"
                       icon="Layout"></argo-kpi-card>
        <argo-kpi-card label="Overdue" value="$229" unit="k" sub="oldest 7 d"
                       [sparkData]="[120, 180, 90, 140, 200, 170, 240, 229]"
                       sparkColor="var(--rose)"
                       icon="Layout"></argo-kpi-card>
        <argo-kpi-card label="Invoiced (MTD)" value="$8.18" unit="M" sub="vs. Apr"
                       trend="up" trendValue="12.6%"
                       [sparkData]="[5.1, 6.0, 5.4, 6.8, 7.2, 7.0, 8.0, 8.18]"
                       icon="Layout"></argo-kpi-card>
        <argo-kpi-card label="AP Pending" value="$1.91" unit="M" sub="next due May 22"
                       [sparkData]="[2.2, 2.0, 1.8, 1.9, 2.1, 1.8, 2.0, 1.91]"
                       sparkColor="var(--amber)"
                       icon="Layout"></argo-kpi-card>
      </div>

      <div class="cols-2 mb-22" style="grid-template-columns: 1.4fr 1fr">
        <argo-cash-flow-chart></argo-cash-flow-chart>
        <argo-ar-aging-chart></argo-ar-aging-chart>
      </div>

      <div class="split">
        <div>
          <argo-filter-bar
            placeholder="Search invoices, vessels, counterparties…"
            [chips]="chips()"
            [active]="filter()"
            (activeChange)="filter.set($any($event))"
          ></argo-filter-bar>

          <div class="card" style="border-radius: 0 0 var(--radius-3) var(--radius-3); border-top: 0">
            <table class="tbl">
              <thead>
                <tr>
                  <th style="width: 130px">Invoice</th>
                  <th>Counterparty</th>
                  <th>Vessel · Voyage</th>
                  <th>Type</th>
                  <th>Issued</th>
                  <th>Due</th>
                  <th class="num">Amount</th>
                  <th style="width: 90px">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr *ngFor="let r of rows()"
                    [attr.data-selected]="r.id === selected() ? '1' : '0'"
                    (click)="selected.set(r.id)">
                  <td class="mono"><span class="row-link">{{ r.id }}</span></td>
                  <td>
                    <div style="font-weight:500">{{ r.counterparty }}</div>
                    <div class="muted" style="font-size:11px">{{ r.ar ? 'Receivable' : 'Payable' }}</div>
                  </td>
                  <td>
                    <div>{{ r.vessel }}</div>
                    <div class="muted mono" style="font-size:11px">{{ r.voyage }}</div>
                  </td>
                  <td class="muted">{{ r.type }}</td>
                  <td class="mono">{{ r.date }}</td>
                  <td>
                    <div class="mono">{{ r.due }}</div>
                    <div *ngIf="r.daysOut < 0" style="font-size:10.5px;color:var(--rose)">
                      {{ -r.daysOut }} d overdue
                    </div>
                  </td>
                  <td class="num"><div style="font-weight:600">{{ fmtCcy(r.amount, r.ccy) }}</div></td>
                  <td><argo-pill [status]="r.status"></argo-pill></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <argo-invoice-drawer
          [invoiceId]="selected()"
          (close)="selected.set(null)"
        ></argo-invoice-drawer>
      </div>
    </div>
  `,
})
export class FinancePageComponent {
  private readonly invoiceService = inject(InvoiceService);

  readonly invoices = toSignal(this.invoiceService.list(), { initialValue: [] as Invoice[] });
  readonly filter = signal<'all' | InvoiceStatus>('all');
  readonly selected = signal<string | null>('INV-2026-0418');

  readonly rows = computed(() => {
    const f = this.filter();
    return f === 'all' ? this.invoices() : this.invoices().filter(i => i.status === f);
  });

  readonly chips = computed<FilterChip[]>(() => {
    const all = this.invoices();
    const count = (s: InvoiceStatus) => all.filter(i => i.status === s).length;
    return [
      { id: 'all',   label: 'All',      count: all.length },
      { id: 'over',  label: 'Overdue',  count: count('over') },
      { id: 'due',   label: 'Due soon', count: count('due') },
      { id: 'sent',  label: 'Open',     count: count('sent') },
      { id: 'paid',  label: 'Paid',     count: count('paid') },
      { id: 'draft', label: 'Drafts',   count: count('draft') },
    ];
  });

  fmtCcy(n: number, ccy: string): string {
    return n.toLocaleString('en-US', { maximumFractionDigits: 0 }) + ' ' + ccy;
  }
}
