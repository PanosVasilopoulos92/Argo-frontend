import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ArgoIconComponent } from '../../shared/ui/icon/argo-icon.component';
import { NAV } from '../nav.config';

@Component({
  selector: 'argo-sidebar',
  standalone: true,
  imports: [NgFor, NgIf, RouterLink, RouterLinkActive, ArgoIconComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <nav class="sidebar">
      <ng-container *ngFor="let g of nav">
        <div class="sb-section" *ngIf="!collapsed">{{ g.section }}</div>
        <a
          *ngFor="let it of g.items"
          class="sb-item"
          [routerLink]="it.path"
          routerLinkActive
          #rla="routerLinkActive"
          [attr.data-active]="rla.isActive ? '1' : '0'"
          [title]="collapsed ? it.label : null"
        >
          <argo-icon [name]="it.icon" [size]="17"></argo-icon>
          <ng-container *ngIf="!collapsed">
            <span>{{ it.label }}</span>
            <span class="count" *ngIf="it.count != null">{{ it.count }}</span>
          </ng-container>
        </a>
      </ng-container>

      <div class="sb-foot">
        <div class="sb-fleet-status" *ngIf="!collapsed">
          <div class="pulse"></div>
          <div class="label">
            Fleet <b>healthy</b>
            <div style="font-size:10.5px;margin-top:1px">All AIS feeds live</div>
          </div>
        </div>
      </div>
    </nav>
  `,
})
export class SidebarComponent {
  @Input() collapsed = false;
  readonly nav = NAV;
}
