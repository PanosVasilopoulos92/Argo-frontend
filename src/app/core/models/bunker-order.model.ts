export type BunkerGrade = 'VLSFO' | 'MGO' | 'LSMGO' | 'ULSFO' | 'HFO';

export type BunkerOrderStatus =
  | 'Pending'
  | 'Confirmed'
  | 'Scheduled'
  | 'Delivered'
  | 'Cancelled';

export interface BunkerOrder {
  id: string;
  vessel: string;
  port: string;
  supplier: string;
  grade: BunkerGrade;
  /** Quantity in metric tonnes. */
  qty: number;
  /** Unit price. */
  price: number;
  ccy: string;
  date: string;
  status: BunkerOrderStatus;
}
