import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { BunkerOrder } from '../models';
import { BUNKER_ORDERS } from '../mock/fixtures.mock';

/** Stub — replace with HttpClient when backend is ready. */
@Injectable({ providedIn: 'root' })
export class BunkerOrderService {
  list(): Observable<BunkerOrder[]> {
    return of(BUNKER_ORDERS);
  }
}
