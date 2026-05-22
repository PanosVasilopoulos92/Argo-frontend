export type PortCallStatus =
  | 'Approaching'
  | 'Berthed'
  | 'Loading'
  | 'Discharging'
  | 'Departed';

export interface PortCall {
  id: string;
  vessel: string;
  port: string;
  berth: string;
  eta: string;
  etd: string;
  agent: string;
  /** Disbursement account estimate. */
  da: number;
  ccy: string;
  status: PortCallStatus;
}
