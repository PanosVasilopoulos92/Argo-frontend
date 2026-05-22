import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Invoice, InvoiceDetail } from '../models';
import { MOCK_INVOICES, MOCK_INVOICE_DETAIL } from '../mock/invoices.mock';

/**
 * Replace the `of(...)` returns with HttpClient calls once your backend is wired.
 *   constructor(private http: HttpClient) {}
 *   list(): Observable<Invoice[]> { return this.http.get<Invoice[]>('/api/invoices'); }
 */
@Injectable({ providedIn: 'root' })
export class InvoiceService {
  list(): Observable<Invoice[]> {
    return of(MOCK_INVOICES);
  }

  get(id: string): Observable<InvoiceDetail> {
    return of({ ...MOCK_INVOICE_DETAIL, id });
  }
}
