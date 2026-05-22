import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

export type PillStatus = 'paid' | 'partial' | 'sent' | 'due' | 'over' | 'draft';

const LABELS: Record<PillStatus, string> = {
  paid: 'Paid', partial: 'Partial', sent: 'Sent', due: 'Due', over: 'Overdue', draft: 'Draft',
};

@Component({
  selector: 'argo-pill',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <span class="pill {{ status }}">
      <span class="dot"></span>
      {{ label ?? defaultLabel }}
    </span>
  `,
})
export class ArgoPillComponent {
  @Input({ required: true }) status!: PillStatus;
  /** Override the default text for this status. */
  @Input() label?: string;
  get defaultLabel(): string { return LABELS[this.status] ?? this.status; }
}
