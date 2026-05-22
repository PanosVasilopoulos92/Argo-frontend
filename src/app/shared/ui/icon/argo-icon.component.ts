import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { NgSwitch, NgSwitchCase } from '@angular/common';

/**
 * Inline SVG icon — single component, switches on `name`.
 * Paths are lifted verbatim from the prototype's `icons.jsx`.
 *
 *   <argo-icon name="Anchor" [size]="16"></argo-icon>
 */
@Component({
  selector: 'argo-icon',
  standalone: true,
  imports: [NgSwitch, NgSwitchCase],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <svg
      [attr.width]="size"
      [attr.height]="size"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      [attr.stroke-width]="strokeWidth"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <ng-container [ngSwitch]="name">
        <g *ngSwitchCase="'Dashboard'">
          <rect x="3" y="3"  width="7" height="9" rx="1.5" />
          <rect x="14" y="3" width="7" height="5" rx="1.5" />
          <rect x="14" y="12" width="7" height="9" rx="1.5" />
          <rect x="3" y="16" width="7" height="5" rx="1.5" />
        </g>
        <g *ngSwitchCase="'Voyage'">
          <circle cx="12" cy="12" r="9" />
          <path d="M12 3 V21 M3 12 H21" />
          <path d="M7 7 L17 17 M17 7 L7 17" opacity="0.35" />
          <circle cx="12" cy="12" r="2" fill="currentColor" />
        </g>
        <path *ngSwitchCase="'Fleet'"  d="M3 16 L21 16 L19 20 L5 20 Z M6 16 V10 L18 10 V16 M12 5 V10 M9 7 L15 7" />
        <path *ngSwitchCase="'Crew'"   d="M3 20 C3 16 5.5 14 9 14 C12.5 14 15 16 15 20 M14 14.5 C18 14.5 21 16 21 20" />
        <path *ngSwitchCase="'Cargo'"  d="M3 7 H21 V20 H3 Z M3 11 H21 M9 7 V20 M15 7 V20" />
        <path *ngSwitchCase="'Port'"   d="M12 4 V20 M7 12 H17 M3 14 C3 18 7 20 12 20 C17 20 21 18 21 14" />
        <path *ngSwitchCase="'Bunker'" d="M12 3 C12 3 6 9.5 6 14 A6 6 0 0 0 18 14 C18 9.5 12 3 12 3 Z" />
        <g *ngSwitchCase="'Finance'">
          <rect x="3" y="6" width="18" height="13" rx="1.5" />
          <path d="M3 10 H21" />
          <circle cx="16" cy="14" r="1.5" />
          <path d="M6 14 H10" />
        </g>
        <path *ngSwitchCase="'Compliance'" d="M12 3 L20 6 V12 C20 16.5 16.5 19.5 12 21 C7.5 19.5 4 16.5 4 12 V6 Z M9 12 L11 14 L15 10" />
        <path *ngSwitchCase="'Inventory'"  d="M3 7 L12 3 L21 7 L12 11 Z M3 7 V17 L12 21 L21 17 V7 M12 11 V21" />
        <g *ngSwitchCase="'Search'">
          <circle cx="11" cy="11" r="6" />
          <path d="M16 16 L21 21" />
        </g>
        <path *ngSwitchCase="'Plus'"   d="M12 5 V19 M5 12 H19" />
        <path *ngSwitchCase="'ChevR'"  d="M9 6 L15 12 L9 18" />
        <path *ngSwitchCase="'ChevD'"  d="M6 9 L12 15 L18 9" />
        <path *ngSwitchCase="'ArrowR'" d="M5 12 H19 M13 6 L19 12 L13 18" />
        <path *ngSwitchCase="'Close'"  d="M6 6 L18 18 M18 6 L6 18" />
        <path *ngSwitchCase="'Bell'"   d="M6 16 V11 C6 7.5 8.5 5 12 5 C15.5 5 18 7.5 18 11 V16 L20 18 H4 Z M10 21 C10.5 21.5 11.2 22 12 22 C12.8 22 13.5 21.5 14 21" />
        <path *ngSwitchCase="'Help'"   d="M9.5 9.5 C9.5 7.5 11 6.5 12 6.5 C13.5 6.5 14.5 7.5 14.5 9 C14.5 10.5 12 11 12 13 M12 16.5 V16.7" />
        <path *ngSwitchCase="'Anchor'" d="M12 7 V21 M8 11 H16 M4 17 C4 19 7 21 12 21 C17 21 20 19 20 17" />
        <path *ngSwitchCase="'Ship'"   d="M3 17 H21 L19 21 H5 Z M5 17 V11 L19 11 V17 M12 6 V11" />
        <path *ngSwitchCase="'Layout'" d="M3 3 H21 V21 H3 Z M3 9 H21 M9 9 V21" />
        <path *ngSwitchDefault></path>
      </ng-container>
    </svg>
  `,
})
export class ArgoIconComponent {
  @Input({ required: true }) name!: string;
  @Input() size: number = 18;
  @Input() strokeWidth: number = 1.5;
}
