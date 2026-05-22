import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { NgFor } from '@angular/common';
import { ArgoIconComponent } from '../icon/argo-icon.component';

export interface FilterChip<T extends string = string> {
  id: T;
  label: string;
  count?: number;
}

/**
 *   <argo-filter-bar
 *     placeholder="Search invoices…"
 *     [chips]="[{id:'all', label:'All', count: 12}, ...]"
 *     [active]="filter"
 *     (activeChange)="filter = $event"
 *     (search)="onSearch($event)"
 *   ></argo-filter-bar>
 */
@Component({
  selector: 'argo-filter-bar',
  standalone: true,
  imports: [NgFor, ArgoIconComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="filters">
      <div class="search">
        <argo-icon name="Search" [size]="14"></argo-icon>
        <input [placeholder]="placeholder" (input)="search.emit(($any($event.target)).value)" />
      </div>
      <button
        *ngFor="let c of chips"
        type="button"
        class="chip"
        [attr.data-active]="c.id === active ? '1' : '0'"
        [style.borderColor]="c.id === active ? 'var(--accent-line)' : null"
        [style.color]="c.id === active ? 'var(--accent)' : null"
        [style.background]="c.id === active ? 'var(--accent-soft)' : null"
        (click)="activeChange.emit(c.id)"
      >
        {{ c.label }}
        <span class="count" *ngIf="c.count != null">{{ c.count }}</span>
      </button>
      <div class="spacer"></div>
      <ng-content></ng-content>
    </div>
  `,
})
export class ArgoFilterBarComponent {
  @Input() placeholder = 'Search…';
  @Input() chips: FilterChip[] = [];
  @Input() active: string = '';
  @Output() activeChange = new EventEmitter<string>();
  @Output() search = new EventEmitter<string>();
}
