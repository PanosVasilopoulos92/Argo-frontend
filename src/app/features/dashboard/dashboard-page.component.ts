import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { NgFor, NgIf, DecimalPipe } from '@angular/common';
import { ArgoKpiCardComponent } from '../../shared/ui/kpi-card/argo-kpi-card.component';
import { ArgoIconComponent } from '../../shared/ui/icon/argo-icon.component';
import { VoyageService } from '../../core/services/voyage.service';
import { Voyage } from '../../core/models';

@Component({
  selector: 'argo-dashboard-page',
  standalone: true,
  imports: [NgFor, NgIf, DecimalPipe, ArgoKpiCardComponent, ArgoIconComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="page">
      <div class="page-head">
        <div>
          <div class="crumb">Operations</div>
          <h1>Fleet overview</h1>
        </div>
      </div>

      <div class="kpi-row">
        <argo-kpi-card label="Active vessels" value="9" sub="1 in drydock" icon="Ship"></argo-kpi-card>
        <argo-kpi-card label="Active voyages" value="9" trend="up" trendValue="3" sub="vs. last week" icon="Voyage"></argo-kpi-card>
        <argo-kpi-card label="Port calls (7 d)" value="14" sub="3 today" icon="Anchor"></argo-kpi-card>
        <argo-kpi-card label="Bunker burn (24h)" value="847" unit=" MT" trend="down" trendValue="2.1%" sub="vs. plan" icon="Bunker"></argo-kpi-card>
      </div>

      <div class="card">
        <div class="card-head">
          <h3>Active voyages</h3>
          <div class="meta">{{ voyages().length }} in progress</div>
        </div>
        <div style="padding:10px 14px; display:flex; flex-direction:column; gap:10px">
          <div class="voyage" *ngFor="let v of voyages()">
            <div style="display:flex; justify-content:space-between; align-items:baseline">
              <div>
                <div style="font-family:var(--font-mono); font-size:11px; color:var(--text-mute)">{{ v.id }}</div>
                <div style="font-weight:600; font-size:13px">{{ v.vessel }}</div>
              </div>
              <div class="hint">{{ v.charterer }} · {{ v.cargo }}</div>
            </div>
            <div class="ports">
              <argo-icon name="Anchor" [size]="14"></argo-icon> <b>{{ v.load }}</b>
              <argo-icon name="ArrowR" [size]="14"></argo-icon>
              <b>{{ v.disch }}</b>
            </div>
            <div class="progress">
              <div class="fill" [style.width.%]="v.progress * 100"></div>
              <div class="ship" [style.left.%]="v.progress * 100"></div>
            </div>
            <div class="meta">
              <span>ETD {{ v.etd }}</span>
              <span>{{ (v.progress * 100) | number:'1.0-0' }}%</span>
              <span>ETA {{ v.eta }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class DashboardPageComponent {
  private readonly voyageService = inject(VoyageService);
  readonly voyages = toSignal(this.voyageService.list(), { initialValue: [] as Voyage[] });
}
