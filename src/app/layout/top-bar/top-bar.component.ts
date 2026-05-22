import { ChangeDetectionStrategy, Component, EventEmitter, Output, inject } from '@angular/core';
import { NgFor } from '@angular/common';
import { ArgoIconComponent } from '../../shared/ui/icon/argo-icon.component';
import { ThemeService, ArgoTheme } from '../../core/services/theme.service';

@Component({
  selector: 'argo-top-bar',
  standalone: true,
  imports: [NgFor, ArgoIconComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <header class="topbar">
      <button class="btn icon ghost" (click)="toggleSidebar.emit()" title="Toggle sidebar">
        <argo-icon name="Layout" [size]="16"></argo-icon>
      </button>

      <div class="tb-search">
        <argo-icon name="Search" [size]="14"></argo-icon>
        <span>Search vessels, voyages, invoices, ports…</span>
        <kbd>⌘K</kbd>
      </div>

      <div class="tb-spacer"></div>

      <div class="tb-actions">
        <button class="tb-btn" *ngFor="let t of themes" (click)="theme.set(t)" [title]="'Theme: ' + t" style="font-size:10.5px;text-transform:uppercase;letter-spacing:.06em;font-weight:600;width:auto;padding:0 8px">
          {{ t === currentTheme() ? '● ' : '' }}{{ t }}
        </button>
        <div style="width:1px;height:18px;background:var(--border);margin:0 4px"></div>
        <div class="tb-btn"><argo-icon name="Plus" [size]="16"></argo-icon></div>
        <div class="tb-btn"><argo-icon name="Bell" [size]="16"></argo-icon><span class="dot"></span></div>
        <div class="tb-btn"><argo-icon name="Help" [size]="16"></argo-icon></div>
        <div style="width:1px;height:18px;background:var(--border);margin:0 4px"></div>
        <div class="tb-user">
          <div class="avatar">EK</div>
          <div style="display:flex;flex-direction:column;line-height:1.15">
            <span class="name">Elena Kovač</span>
            <span class="role">Fleet Manager</span>
          </div>
          <argo-icon name="ChevD" [size]="14"></argo-icon>
        </div>
      </div>
    </header>
  `,
})
export class TopBarComponent {
  @Output() toggleSidebar = new EventEmitter<void>();
  readonly theme = inject(ThemeService);
  readonly themes: ArgoTheme[] = ['deepsea', 'harbor', 'bridge'];
  currentTheme(): ArgoTheme { return this.theme.theme(); }
}
