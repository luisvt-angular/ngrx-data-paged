import { Observable } from 'rxjs';
import { Update } from '@ngrx/entity';
import { Page } from '../utils/page';
import { QueryParams } from '@ngrx/data';

/** A service that performs REST-like HTTP data operations for an entity collection */
export interface EntityCollectionDataService<T> {
  readonly name: string;
  add(entity: T): Observable<T>;
  delete(id: number | string): Observable<number | string>;
  getAll(): Observable<T[]>;
  getById(id: any): Observable<T>;
  getWithQuery(params: QueryParams | string): Observable<T[]>;
  getPageWithQuery(params: QueryParams | string): Observable<Page<T>>;
  update(update: Update<T>): Observable<T>;
  upsert(entity: T): Observable<T>;
}
