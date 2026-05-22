export interface Voyage {
  id: string;
  vessel: string;
  load: string;
  disch: string;
  cargo: string;
  /** 0..1, fraction of voyage complete. */
  progress: number;
  etd: string;
  eta: string;
  charterer: string;
}
