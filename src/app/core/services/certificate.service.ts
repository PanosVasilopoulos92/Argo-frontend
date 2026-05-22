import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Certificate } from '../models';
import { CERTIFICATES } from '../mock/fixtures.mock';

/** Stub — replace with HttpClient when backend is ready. */
@Injectable({ providedIn: 'root' })
export class CertificateService {
  list(): Observable<Certificate[]> {
    return of(CERTIFICATES);
  }
}
