import { Routes } from '@angular/router';
import { AppShellComponent } from './layout/app-shell/app-shell.component';

export const routes: Routes = [
  {
    path: '',
    component: AppShellComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'finance' },
      {
        path: 'dashboard',
        loadComponent: () =>
          import('./features/dashboard/dashboard-page.component').then(m => m.DashboardPageComponent),
        data: { label: 'Dashboard' },
      },
      {
        path: 'voyages',
        loadComponent: () =>
          import('./features/voyages/voyages-page.component').then(m => m.VoyagesPageComponent),
        data: { label: 'Voyages' },
      },
      {
        path: 'fleet',
        loadComponent: () =>
          import('./features/fleet/fleet-page.component').then(m => m.FleetPageComponent),
        data: { label: 'Fleet' },
      },
      {
        path: 'crew',
        loadComponent: () =>
          import('./features/crew/crew-page.component').then(m => m.CrewPageComponent),
        data: { label: 'Crew' },
      },
      {
        path: 'chartering',
        loadComponent: () =>
          import('./features/chartering/chartering-page.component').then(m => m.CharteringPageComponent),
        data: { label: 'Chartering' },
      },
      {
        path: 'port-calls',
        loadComponent: () =>
          import('./features/port-calls/port-calls-page.component').then(m => m.PortCallsPageComponent),
        data: { label: 'Port Calls' },
      },
      {
        path: 'bunker',
        loadComponent: () =>
          import('./features/bunker/bunker-page.component').then(m => m.BunkerPageComponent),
        data: { label: 'Bunker' },
      },
      {
        path: 'finance',
        loadComponent: () =>
          import('./features/finance/finance-page.component').then(m => m.FinancePageComponent),
        data: { label: 'Finance' },
      },
      {
        path: 'compliance',
        loadComponent: () =>
          import('./features/compliance/compliance-page.component').then(m => m.CompliancePageComponent),
        data: { label: 'Compliance' },
      },
      {
        path: 'inventory',
        loadComponent: () =>
          import('./features/inventory/inventory-page.component').then(m => m.InventoryPageComponent),
        data: { label: 'Inventory' },
      },
      { path: '**', redirectTo: 'finance' },
    ],
  },
];
