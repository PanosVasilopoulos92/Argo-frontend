import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { NgFor } from '@angular/common';
import { Vessel } from '../../../core/models';

// Hand-traced continent shapes (equirectangular-ish), viewbox 0..1000 × 0..500.
// Copy more shapes from the prototype's data.jsx :: CONTINENTS as needed.
const CONTINENTS: string[] = [
  // Americas, Europe, Africa, Asia, Australia, etc. — see prototype data.jsx.
];

@Component({
  selector: 'argo-world-map',
  standalone: true,
  imports: [NgFor],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="map-wrap">
      <svg class="world" viewBox="0 0 1000 500" preserveAspectRatio="xMidYMid slice">
        <rect width="1000" height="500" fill="var(--map-water)" />
        <path *ngFor="let d of continents"
              [attr.d]="d"
              fill="var(--map-land)"
              stroke="var(--map-land-ln)"
              stroke-width="0.8" />
        <g *ngFor="let v of vessels">
          <circle [attr.cx]="lon2x(v.lon)"
                  [attr.cy]="lat2y(v.lat)"
                  r="4"
                  fill="var(--accent)"
                  stroke="var(--map-water)"
                  stroke-width="1.4" />
        </g>
      </svg>
    </div>
  `,
})
export class WorldMapComponent {
  @Input() vessels: Vessel[] = [];
  readonly continents = CONTINENTS;

  lon2x(lon: number): number { return ((lon + 180) / 360) * 1000; }
  lat2y(lat: number): number { return ((75 - lat) / 135) * 500; }
}
