import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Voyage } from '../models';
import { VOYAGES } from '../mock/fixtures.mock';

/** Stub — replace with HttpClient when backend is ready. */
@Injectable({ providedIn: 'root' })
export class VoyageService {
  list(): Observable<Voyage[]> {
    return of(VOYAGES);
  }
}
