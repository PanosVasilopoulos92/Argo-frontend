import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { NgFor, DecimalPipe } from '@angular/common';
import { PortCallService } from '../../core/services/port-call.service';
import { PortCall } from '../../core/models';

@Component({
  selector: 'argo-port-calls-page',
  standalone: true,
  imports: [NgFor, DecimalPipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="page">
      <div class="page-head">
        <div><div class="crumb">Commercial · Port</div><h1>Port calls</h1></div>
      </div>
      <div class="card">
        <table class="tbl">
          <thead>
            <tr>
              <th>Call</th><th>Vessel</th><th>Port · Berth</th>
              <th>ETA</th><th>ETD</th><th>Agent</th>
              <th class="num">DA estimate</th><th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr *ngFor="let c of rows()">
              <td class="mono"><span class="row-link">{{ c.id }}</span></td>
              <td>{{ c.vessel }}</td>
              <td>{{ c.port }}<div class="muted" style="font-size:11px">Berth {{ c.berth }}</div></td>
              <td class="mono">{{ c.eta }}</td>
              <td class="mono">{{ c.etd }}</td>
              <td class="muted">{{ c.agent }}</td>
              <td class="num">{{ c.da | number }} {{ c.ccy }}</td>
              <td>{{ c.status }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  `,
})
export class PortCallsPageComponent {
  private readonly svc = inject(PortCallService);
  readonly rows = toSignal(this.svc.list(), { initialValue: [] as PortCall[] });
}
