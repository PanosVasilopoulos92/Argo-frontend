import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { NgFor } from '@angular/common';

export interface TimelineEvent {
  t: string;
  what: string;
  who?: string;
  state: 'done' | 'active' | 'pending';
}

@Component({
  selector: 'argo-timeline',
  standalone: true,
  imports: [NgFor],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <ul class="tl">
      <li *ngFor="let e of events" [attr.data-state]="e.state">
        <div class="time">{{ e.t }}</div>
        <div class="what">{{ e.what }}</div>
        <div class="who" *ngIf="e.who">{{ e.who }}</div>
      </li>
    </ul>
  `,
})
export class ArgoTimelineComponent {
  @Input() events: TimelineEvent[] = [];
}
