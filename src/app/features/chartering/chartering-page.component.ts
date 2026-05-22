import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { NgFor } from '@angular/common';
import { FixtureService } from '../../core/services/fixture.service';
import { Fixture } from '../../core/models';

@Component({
  selector: 'argo-chartering-page',
  standalone: true,
  imports: [NgFor],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="page">
      <div class="page-head">
        <div><div class="crumb">Commercial · Chartering</div><h1>Fixtures &amp; cargo</h1></div>
      </div>
      <div class="card">
        <table class="tbl">
          <thead>
            <tr>
              <th>Fixture</th><th>Counterparty</th><th>Vessel</th><th>Cargo</th>
              <th>Route</th><th>Rate</th><th>Type</th><th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr *ngFor="let f of rows()">
              <td class="mono"><span class="row-link">{{ f.id }}</span></td>
              <td>{{ f.counterparty }}</td>
              <td>{{ f.vessel }}</td>
              <td>{{ f.cargo }}</td>
              <td class="muted">{{ f.route }}</td>
              <td class="mono">{{ f.rate }}</td>
              <td class="muted">{{ f.type }}</td>
              <td>{{ f.status }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  `,
})
export class CharteringPageComponent {
  private readonly svc = inject(FixtureService);
  readonly rows = toSignal(this.svc.list(), { initialValue: [] as Fixture[] });
}
