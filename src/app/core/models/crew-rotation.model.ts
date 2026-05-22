export interface CrewRotation {
  vessel: string;
  rank: string;
  name: string;
  signOn: string;
  signOff: string;
  daysRemaining: number;
  status: 'active' | 'rotating';
}
