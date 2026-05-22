export type InventoryStatus = 'OK' | 'Low' | 'Reorder' | 'Critical';

export interface InventoryItem {
  sku: string;
  description: string;
  /** Vessel name or "Stock" for warehouse. */
  location: string;
  stock: number;
  min: number;
  onOrder: number;
  /** Unit value (in base currency). */
  unitValue: number;
  status: InventoryStatus;
}
