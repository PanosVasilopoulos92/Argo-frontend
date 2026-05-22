export type FixtureType = 'Voyage' | 'TC' | 'COA' | 'BBC';
export type FixtureStatus =
  | 'Inquiry'
  | 'Negotiating'
  | 'Confirmed'
  | 'Active'
  | 'Loading'
  | 'Completed';

export interface Fixture {
  id: string;
  counterparty: string;
  vessel: string;
  cargo: string;
  route: string;
  rate: string;
  type: FixtureType;
  status: FixtureStatus;
}
