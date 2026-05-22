import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { NgFor } from '@angular/common';
import { VesselService } from '../../core/services/vessel.service';
import { Vessel } from '../../core/models';
import { WorldMapComponent } from './world-map/world-map.component';

@Component({
  selector: 'argo-voyages-page',
  standalone: true,
  imports: [NgFor, WorldMapComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="page">
      <div class="page-head">
        <div>
          <div class="crumb">Operations · Voyages</div>
          <h1>Live fleet map</h1>
        </div>
      </div>

      <argo-world-map [vessels]="vessels()"></argo-world-map>
    </div>
  `,
})
export class VoyagesPageComponent {
  private readonly vesselService = inject(VesselService);
  readonly vessels = toSignal(this.vesselService.list(), { initialValue: [] as Vessel[] });
}
