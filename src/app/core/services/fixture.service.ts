import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Fixture } from '../models';
import { FIXTURES } from '../mock/fixtures.mock';

/** Stub — replace with HttpClient when backend is ready. */
@Injectable({ providedIn: 'root' })
export class FixtureService {
  list(): Observable<Fixture[]> {
    return of(FIXTURES);
  }
}
