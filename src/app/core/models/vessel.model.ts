export type VesselStatus =
  | 'Laden'
  | 'Ballast'
  | 'Loading'
  | 'Discharging'
  | 'Drydock'
  | 'Anchored';

export type VesselType =
  | 'Bulk Carrier'
  | 'Tanker (MR)'
  | 'Tanker (LR2)'
  | 'Tanker (VLCC)'
  | 'Container'
  | 'General Cargo';

export interface Vessel {
  id: string;
  name: string;
  type: VesselType;
  /** Deadweight tonnage (for bulkers/tankers). */
  dwt?: number;
  /** TEU capacity (for containers). */
  teu?: number;
  imo: string;
  flag: string;
  built: number;
  status: VesselStatus;
  voyage: string;
  /** Current latitude/longitude (decimal degrees). */
  lat: number;
  lon: number;
  /** Speed over ground, knots. */
  speed: number;
  /** Heading, degrees true (0–359). */
  hdg: number;
  /** Next port name. */
  next: string;
  /** ETA, formatted. */
  eta: string;
}
