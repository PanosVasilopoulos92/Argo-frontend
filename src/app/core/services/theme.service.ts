import { Injectable, signal, effect } from '@angular/core';

export type ArgoTheme = 'deepsea' | 'harbor' | 'bridge';

const STORAGE_KEY = 'argo-theme';
const DEFAULT_ACCENTS: Record<ArgoTheme, string> = {
  deepsea: '#4dd4c5',
  harbor:  '#0d4f6b',
  bridge:  '#0891b2',
};

/**
 * Sole owner of [data-theme] on <html> and the --accent CSS variable.
 * Persists choice to localStorage; restores on boot.
 *
 * Usage:
 *   constructor(theme: ThemeService) {}
 *   theme.theme();       // current theme as signal-read
 *   theme.set('harbor');
 */
@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly _theme = signal<ArgoTheme>(this.readStored());
  private readonly _accent = signal<string>(DEFAULT_ACCENTS[this._theme()]);

  readonly theme = this._theme.asReadonly();
  readonly accent = this._accent.asReadonly();

  constructor() {
    effect(() => {
      const t = this._theme();
      const a = this._accent();
      const html = document.documentElement;
      html.setAttribute('data-theme', t);
      html.style.setProperty('--accent', a);
      html.style.setProperty(
        '--accent-soft',
        `color-mix(in srgb, ${a} 14%, transparent)`
      );
      html.style.setProperty(
        '--accent-line',
        `color-mix(in srgb, ${a} 35%, transparent)`
      );
      localStorage.setItem(STORAGE_KEY, t);
    });
  }

  set(theme: ArgoTheme): void {
    this._theme.set(theme);
    this._accent.set(DEFAULT_ACCENTS[theme]);
  }

  setAccent(hex: string): void {
    this._accent.set(hex);
  }

  private readStored(): ArgoTheme {
    const v = localStorage.getItem(STORAGE_KEY) as ArgoTheme | null;
    return v && ['deepsea', 'harbor', 'bridge'].includes(v) ? v : 'deepsea';
  }
}
