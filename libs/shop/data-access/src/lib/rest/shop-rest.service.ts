import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiService } from '@ecommerce/shared/api';
import { environment } from '@env/shop/environment';

@Injectable()
export class ShopRestService {

  constructor(private apiService: ApiService) { }

  get<T>(url: string, params: HttpParams = new HttpParams()): Observable<T> {
    return this.apiService.get<T>(`${environment.api_url}${url}`, params);
  }

  post<T, D>(url: string, data: D): Observable<T> {
    return this.apiService.post(environment.api_url+url, data);
  }

  put<T, D>(url: string, data: D): Observable<T> {
    return this.apiService.put(`${environment.api_url}${url}`, data);
  }

  delete<T>(url: string): Observable<T> {
    return this.apiService.delete<T>(`${environment.api_url}${url}`);
  }
}
