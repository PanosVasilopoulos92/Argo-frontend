export type InvoiceStatus = 'paid' | 'partial' | 'sent' | 'due' | 'over' | 'draft';

export type InvoiceType =
  | 'Freight'
  | 'Bunker'
  | 'Port Disbursement'
  | 'Time Charter Hire'
  | 'Agency Fees';

export interface Invoice {
  /** Human-readable invoice number, e.g. "INV-2026-0418". */
  id: string;
  /** Issue date (ISO 8601). */
  date: string;
  /** Due date (ISO 8601). */
  due: string;
  type: InvoiceType;
  counterparty: string;
  vessel: string;
  voyage: string;
  amount: number;
  ccy: 'USD' | 'EUR' | 'GBP' | string;
  status: InvoiceStatus;
  /** True if accounts-receivable, false if accounts-payable. */
  ar: boolean;
  /** Days until due (negative = overdue). */
  daysOut: number;
}

export interface InvoiceLine {
  desc: string;
  qty?: number;
  rate?: number;
  amount: number;
}

export interface InvoiceDoc {
  name: string;
  size: string;
  kind: 'PDF' | 'XLS' | 'DOC' | string;
}

export interface InvoiceTimelineEvent {
  /** ISO timestamp or pre-formatted string for now. */
  t: string;
  what: string;
  who: string;
  state: 'done' | 'active' | 'pending';
}

export interface InvoiceDetail extends Invoice {
  cp: string;
  charterer: { name: string; contact: string; ref: string };
  voyageInfo: { id: string; load: string; disch: string; cargo: string; laycan: string };
  lines: InvoiceLine[];
  subtotal: number;
  tax: number;
  total: number;
  docs: InvoiceDoc[];
  timeline: InvoiceTimelineEvent[];
  audit: { t: string; what: string; who: string }[];
}
