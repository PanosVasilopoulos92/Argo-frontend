import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { NgFor } from '@angular/common';
import { CrewRotationService } from '../../core/services/crew.service';
import { CrewRotation } from '../../core/models';
import { ArgoPillComponent } from '../../shared/ui/pill/argo-pill.component';

@Component({
  selector: 'argo-crew-page',
  standalone: true,
  imports: [NgFor, ArgoPillComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="page">
      <div class="page-head">
        <div><div class="crumb">Operations · Crew</div><h1>Crew &amp; rotations</h1></div>
      </div>
      <div class="card">
        <table class="tbl">
          <thead>
            <tr>
              <th>Vessel</th><th>Rank</th><th>Name</th>
              <th>Sign-on</th><th>Sign-off</th><th>Days remaining</th><th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr *ngFor="let r of rows()">
              <td><span class="row-link">{{ r.vessel }}</span></td>
              <td class="muted">{{ r.rank }}</td>
              <td>{{ r.name }}</td>
              <td class="mono">{{ r.signOn }}</td>
              <td class="mono">{{ r.signOff }}</td>
              <td class="mono">{{ r.daysRemaining }} d</td>
              <td>
                <argo-pill
                  [status]="r.status === 'rotating' ? 'due' : 'paid'"
                  [label]="r.status === 'rotating' ? 'Rotating soon' : 'Active'"
                ></argo-pill>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  `,
})
export class CrewPageComponent {
  private readonly svc = inject(CrewRotationService);
  readonly rows = toSignal(this.svc.list(), { initialValue: [] as CrewRotation[] });
}
