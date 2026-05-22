import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CrewRotation } from '../models';
import { CREW_ROTATIONS } from '../mock/fixtures.mock';

/** Stub — replace with HttpClient when backend is ready. */
@Injectable({ providedIn: 'root' })
export class CrewRotationService {
  list(): Observable<CrewRotation[]> {
    return of(CREW_ROTATIONS);
  }
}
