import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, inject, computed, signal } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { toSignal } from '@angular/core/rxjs-interop';
import { InvoiceService } from '../../../core/services/invoice.service';
import { ArgoDrawerComponent } from '../../../shared/ui/drawer/argo-drawer.component';
import { ArgoTimelineComponent } from '../../../shared/ui/timeline/argo-timeline.component';
import { ArgoPillComponent } from '../../../shared/ui/pill/argo-pill.component';
import { ArgoIconComponent } from '../../../shared/ui/icon/argo-icon.component';
import { of } from 'rxjs';

@Component({
  selector: 'argo-invoice-drawer',
  standalone: true,
  imports: [NgFor, NgIf, ArgoDrawerComponent, ArgoTimelineComponent, ArgoPillComponent, ArgoIconComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <argo-drawer
      *ngIf="inv() as i"
      [crumb]="i.type + ' · ' + i.id"
      [title]="fmtCcy(i.amount, i.ccy)"
      (close)="close.emit()"
    >
      <div argoDrawerSubhead style="display:flex; gap: 8px; margin-top: 10px">
        <argo-pill [status]="i.status"></argo-pill>
        <span class="hint">Due {{ i.due }}</span>
      </div>

      <div class="drawer-section">
        <h4>Parties</h4>
        <dl class="defs">
          <dt>Charterer</dt><dd>{{ i.counterparty }}</dd>
          <dt>Reference</dt><dd class="mono">{{ i.charterer.ref }}</dd>
          <dt>Contact</dt><dd class="mono" style="font-size:11.5px">{{ i.charterer.contact }}</dd>
          <dt>Charter Party</dt><dd>{{ i.cp }}</dd>
        </dl>
      </div>

      <div class="drawer-section">
        <h4>Voyage</h4>
        <dl class="defs">
          <dt>Vessel</dt><dd>{{ i.vessel }}</dd>
          <dt>Voyage</dt><dd class="mono">{{ i.voyage }}</dd>
          <dt>Load</dt><dd>{{ i.voyageInfo.load }}</dd>
          <dt>Discharge</dt><dd>{{ i.voyageInfo.disch }}</dd>
          <dt>Cargo</dt><dd>{{ i.voyageInfo.cargo }}</dd>
          <dt>Laycan</dt><dd class="mono">{{ i.voyageInfo.laycan }}</dd>
        </dl>
      </div>

      <div class="drawer-section">
        <h4>Line items</h4>
        <table class="li-table">
          <thead>
            <tr><th>Description</th><th class="num">Amount</th></tr>
          </thead>
          <tbody>
            <tr *ngFor="let l of i.lines">
              <td>{{ l.desc }}</td>
              <td class="num">{{ l.amount.toLocaleString() }}</td>
            </tr>
          </tbody>
        </table>
        <div class="li-totals">
          <div class="lbl">Subtotal</div><div class="val">{{ i.subtotal.toLocaleString() }} {{ i.ccy }}</div>
          <div class="lbl">Tax</div><div class="val">0.00 {{ i.ccy }}</div>
          <div class="lbl total">Total Due</div><div class="val total">{{ i.total.toLocaleString() }} {{ i.ccy }}</div>
        </div>
      </div>

      <div class="drawer-section">
        <h4>Attached documents</h4>
        <div class="doclist">
          <div class="doc" *ngFor="let d of i.docs">
            <div class="icon">{{ d.kind }}</div>
            <div>
              <div class="name">{{ d.name }}</div>
              <div class="meta">{{ d.size }}</div>
            </div>
            <div class="right"><argo-icon name="ChevR" [size]="15"></argo-icon></div>
          </div>
        </div>
      </div>

      <div class="drawer-section">
        <h4>Voyage timeline</h4>
        <argo-timeline [events]="i.timeline"></argo-timeline>
      </div>

      <div class="drawer-section">
        <h4>Audit trail</h4>
        <argo-timeline [events]="audit(i)"></argo-timeline>
      </div>
    </argo-drawer>
  `,
})
export class InvoiceDrawerComponent {
  private readonly svc = inject(InvoiceService);
  private readonly _id = signal<string | null>(null);

  @Input() set invoiceId(v: string | null) { this._id.set(v); }
  @Output() close = new EventEmitter<void>();

  /**
   * In a real app this is a switchMap on a BehaviorSubject from the id signal.
   * For now we fetch the mock detail directly when id is non-null.
   */
  readonly inv = computed(() => {
    const id = this._id();
    if (!id) return null;
    // Synchronous because of() emits immediately; safe.
    let v: any = null;
    this.svc.get(id).subscribe(x => (v = x));
    return v;
  });

  fmtCcy(n: number, ccy: string): string {
    return n.toLocaleString('en-US', { maximumFractionDigits: 0 }) + ' ' + ccy;
  }

  /** Audit entries don't have a 'state' — synthesize one. */
  audit(i: any) {
    return (i.audit ?? []).map((a: any) => ({ ...a, state: 'done' as const }));
  }
}
