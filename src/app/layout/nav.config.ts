export interface NavItem {
  id: string;
  label: string;
  /** Route path (relative to /). */
  path: string;
  /** Name of icon in IconComponent's switch. */
  icon: string;
  count: number | null;
  badge?: string;
}

export interface NavSection {
  section: string;
  items: NavItem[];
}

export const NAV: NavSection[] = [
  {
    section: 'Operations',
    items: [
      { id: 'dashboard',  label: 'Dashboard',  path: '/dashboard',  icon: 'Dashboard', count: null },
      { id: 'voyages',    label: 'Voyages',    path: '/voyages',    icon: 'Voyage',    count: 9   },
      { id: 'fleet',      label: 'Fleet',      path: '/fleet',      icon: 'Fleet',     count: 10  },
      { id: 'crew',       label: 'Crew',       path: '/crew',       icon: 'Crew',      count: 184 },
    ],
  },
  {
    section: 'Commercial',
    items: [
      { id: 'chartering', label: 'Chartering', path: '/chartering', icon: 'Cargo',     count: 14   },
      { id: 'port-calls', label: 'Port Calls', path: '/port-calls', icon: 'Port',      count: 6    },
      { id: 'bunker',     label: 'Bunker',     path: '/bunker',     icon: 'Bunker',    count: null },
    ],
  },
  {
    section: 'Back office',
    items: [
      { id: 'finance',    label: 'Finance',    path: '/finance',    icon: 'Finance',   count: 27, badge: '•' },
      { id: 'compliance', label: 'Compliance', path: '/compliance', icon: 'Compliance',count: 3   },
      { id: 'inventory',  label: 'Inventory',  path: '/inventory',  icon: 'Inventory', count: null },
    ],
  },
];
