import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PortCall } from '../models';
import { PORT_CALLS } from '../mock/fixtures.mock';

/** Stub — replace with HttpClient when backend is ready. */
@Injectable({ providedIn: 'root' })
export class PortCallService {
  list(): Observable<PortCall[]> {
    return of(PORT_CALLS);
  }
}
