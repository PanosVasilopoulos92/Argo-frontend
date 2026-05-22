import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { NgFor } from '@angular/common';
import { CertificateService } from '../../core/services/certificate.service';
import { Certificate } from '../../core/models';

@Component({
  selector: 'argo-compliance-page',
  standalone: true,
  imports: [NgFor],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="page">
      <div class="page-head">
        <div><div class="crumb">Back office · Compliance</div><h1>Certificates &amp; surveys</h1></div>
      </div>
      <div class="card">
        <table class="tbl">
          <thead>
            <tr>
              <th>Vessel</th><th>Certificate</th><th>Issued by</th>
              <th>Issued</th><th>Expires</th><th>Days remaining</th><th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr *ngFor="let c of rows()">
              <td><span class="row-link">{{ c.vessel }}</span></td>
              <td>{{ c.cert }}</td>
              <td class="muted">{{ c.issuer }}</td>
              <td class="mono">{{ c.issued }}</td>
              <td class="mono">{{ c.expires }}</td>
              <td class="mono">{{ c.days }} d</td>
              <td>{{ c.severity }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  `,
})
export class CompliancePageComponent {
  private readonly svc = inject(CertificateService);
  readonly rows = toSignal(this.svc.list(), { initialValue: [] as Certificate[] });
}
