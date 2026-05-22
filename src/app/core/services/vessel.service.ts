import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Vessel } from '../models';
import { VESSELS } from '../mock/fixtures.mock';

/** Stub — replace with HttpClient when backend is ready. */
@Injectable({ providedIn: 'root' })
export class VesselService {
  list(): Observable<Vessel[]> {
    return of(VESSELS);
  }
}
