import { ChangeDetectionStrategy, Component, ContentChild, Directive, EventEmitter, Input, Output, TemplateRef } from '@angular/core';
import { NgFor, NgIf, NgTemplateOutlet } from '@angular/common';

/**
 * Generic data table. You provide the column definitions and a row template.
 *
 *   <argo-data-table [rows]="invoices" [columns]="cols"
 *                    [selected]="selectedId" (rowClick)="onSelect($event)">
 *     <ng-template argoRow let-r>
 *       <td class="mono">{{ r.id }}</td>
 *       <td>{{ r.counterparty }}</td>
 *       ...
 *     </ng-template>
 *   </argo-data-table>
 *
 * For maximum flexibility, this component just renders <thead> and a click-able
 * <tbody><tr> per row, projecting the cells via ng-template. Keeps callers free
 * to use mono/num/muted classes, icons, pills, whatever.
 */
export interface DataTableColumn {
  label: string;
  align?: 'left' | 'right';
  width?: string;
}

@Directive({
  selector: '[argoRow]',
  standalone: true,
})
export class ArgoRowDirective {
  constructor(public template: TemplateRef<any>) {}
}

@Component({
  selector: 'argo-data-table',
  standalone: true,
  imports: [NgFor, NgIf, NgTemplateOutlet],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="card">
      <table class="tbl">
        <thead>
          <tr>
            <th *ngFor="let c of columns"
                [class.num]="c.align === 'right'"
                [style.width]="c.width">{{ c.label }}</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let r of rows; let i = index"
              [attr.data-selected]="trackBy(r, i) === selected ? '1' : '0'"
              (click)="rowClick.emit(r)">
            <ng-container *ngTemplateOutlet="rowTemplate?.template ?? null; context: { $implicit: r, index: i }"></ng-container>
          </tr>
        </tbody>
      </table>
    </div>
  `,
})
export class ArgoDataTableComponent {
  @Input() columns: DataTableColumn[] = [];
  @Input() rows: any[] = [];
  /** Identifier of the currently-selected row (for highlight). */
  @Input() selected: string | null = null;
  /** How to identify a row — defaults to .id. Override for non-standard keys. */
  @Input() trackBy: (row: any, i: number) => string = (r) => r.id;
  @Output() rowClick = new EventEmitter<any>();

  @ContentChild(ArgoRowDirective) rowTemplate?: ArgoRowDirective;
}
