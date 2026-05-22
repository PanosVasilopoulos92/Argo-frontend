import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgFor, DecimalPipe } from '@angular/common';
import { toSignal } from '@angular/core/rxjs-interop';
import { VesselService } from '../../core/services/vessel.service';
import { Vessel } from '../../core/models';
import { ArgoButtonComponent } from '../../shared/ui/button/argo-button.component';

@Component({
  selector: 'argo-fleet-page',
  standalone: true,
  imports: [NgFor, DecimalPipe, ArgoButtonComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="page">
      <div class="page-head">
        <div>
          <div class="crumb">Operations · Fleet</div>
          <h1>Fleet</h1>
        </div>
        <div class="actions">
          <argo-button kind="primary">+ Add vessel</argo-button>
        </div>
      </div>

      <div class="card">
        <table class="tbl">
          <thead>
            <tr>
              <th>Vessel</th><th>Type</th><th class="num">DWT / TEU</th>
              <th>IMO</th><th>Flag</th><th>Built</th><th>Status</th>
              <th>Next port</th><th>Voyage</th>
            </tr>
          </thead>
          <tbody>
            <tr *ngFor="let v of vessels()">
              <td>
                <span class="row-link">{{ v.name }}</span>
                <div class="muted mono" style="font-size:11px">{{ v.id }}</div>
              </td>
              <td class="muted">{{ v.type }}</td>
              <td class="num">{{ (v.dwt || v.teu) | number }}</td>
              <td class="mono">{{ v.imo }}</td>
              <td>{{ v.flag }}</td>
              <td class="mono">{{ v.built }}</td>
              <td>{{ v.status }}</td>
              <td>{{ v.next }}</td>
              <td class="mono muted">{{ v.voyage }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  `,
})
export class FleetPageComponent {
  private readonly vesselService = inject(VesselService);
  readonly vessels = toSignal(this.vesselService.list(), { initialValue: [] as Vessel[] });
}
