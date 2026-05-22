import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { InventoryItem } from '../models';
import { INVENTORY } from '../mock/fixtures.mock';

/** Stub — replace with HttpClient when backend is ready. */
@Injectable({ providedIn: 'root' })
export class InventoryItemService {
  list(): Observable<InventoryItem[]> {
    return of(INVENTORY);
  }
}
