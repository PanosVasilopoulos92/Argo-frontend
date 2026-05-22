import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

/**
 *   <argo-button>Default</argo-button>
 *   <argo-button kind="primary">Save</argo-button>
 *   <argo-button kind="ghost">Cancel</argo-button>
 *   <argo-button kind="icon"><argo-icon name="Plus"/></argo-button>
 */
@Component({
  selector: 'argo-button',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <button
      type="button"
      [class]="'btn ' + (kind ? kind : '') + (size === 'sm' ? ' sm' : '')"
      [disabled]="disabled"
    >
      <ng-content></ng-content>
    </button>
  `,
})
export class ArgoButtonComponent {
  @Input() kind: 'default' | 'primary' | 'ghost' | 'icon' = 'default';
  @Input() size: 'md' | 'sm' = 'md';
  @Input() disabled = false;
}
