export type CertSeverity = 'ok' | 'info' | 'warn' | 'critical';

export interface Certificate {
  vessel: string;
  cert: string;
  issuer: string;
  issued: string;
  expires: string;
  /** Days remaining; negative = expired. */
  days: number;
  severity: CertSeverity;
}
