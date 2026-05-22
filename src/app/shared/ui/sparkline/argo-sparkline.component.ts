import { ChangeDetectionStrategy, Component, Input, computed, signal } from '@angular/core';

@Component({
  selector: 'argo-sparkline',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <svg class="spark" [attr.viewBox]="'0 0 ' + w + ' ' + h" preserveAspectRatio="none">
      <polyline
        [attr.points]="points()"
        fill="none"
        [attr.stroke]="color || 'var(--accent)'"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  `,
})
export class ArgoSparklineComponent {
  private readonly _data = signal<number[]>([]);
  @Input({ required: true }) set data(v: number[]) { this._data.set(v); }
  @Input() color?: string;
  @Input() w = 80;
  @Input() h = 28;

  readonly points = computed(() => {
    const d = this._data();
    if (!d.length) return '';
    const max = Math.max(...d), min = Math.min(...d);
    const range = max - min || 1;
    return d
      .map((v, i) => {
        const x = (i / (d.length - 1)) * this.w;
        const y = this.h - ((v - min) / range) * (this.h - 4) - 2;
        return `${x},${y}`;
      })
      .join(' ');
  });
}
