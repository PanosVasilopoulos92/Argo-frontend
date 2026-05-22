import { ChangeDetectionStrategy, Component, signal, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ThemeService } from '../../core/services/theme.service';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { TopBarComponent } from '../top-bar/top-bar.component';

@Component({
  selector: 'argo-app-shell',
  standalone: true,
  imports: [RouterOutlet, SidebarComponent, TopBarComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="app" [attr.data-collapsed]="collapsed() ? '1' : '0'">
      <div class="logo-cell">
        <div class="logo-mark">
          <svg width="22" height="22" viewBox="0 0 32 32" fill="none">
            <path d="M16 4 L26 22 L20 22 L16 14 L12 22 L6 22 Z"
                  stroke="currentColor" stroke-width="1.8"
                  stroke-linejoin="round" fill="currentColor" fill-opacity="0.12"/>
            <path d="M4 24 Q8 27 12 24 Q16 21 20 24 Q24 27 28 24"
                  stroke="currentColor" stroke-width="1.8"
                  stroke-linecap="round" fill="none"/>
          </svg>
        </div>
        <div>
          <span class="logo-word">Argo</span>
          <span class="logo-tag">ERP</span>
        </div>
      </div>

      <argo-top-bar (toggleSidebar)="toggleCollapse()"></argo-top-bar>
      <argo-sidebar [collapsed]="collapsed()"></argo-sidebar>

      <main class="main">
        <router-outlet></router-outlet>
      </main>
    </div>
  `,
})
export class AppShellComponent {
  readonly theme = inject(ThemeService);
  readonly collapsed = signal(false);
  toggleCollapse(): void { this.collapsed.update(v => !v); }
}
