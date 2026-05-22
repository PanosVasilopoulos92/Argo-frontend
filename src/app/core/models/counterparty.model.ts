export type CounterpartyRole = 'Charterer' | 'Supplier' | 'Port' | 'Agent';

export interface Counterparty {
  id: string;
  name: string;
  role: CounterpartyRole;
  country: string;
}
