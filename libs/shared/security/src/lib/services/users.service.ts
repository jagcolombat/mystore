import { EventEmitter, Injectable, Output } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { ApplicationUser } from '@ecommerce/shared/security';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  @Output() evRegisterOk = new EventEmitter<boolean>();

  constructor(private readonly http: HttpClient) {
  }

  register(username: string, password: string) {
    return this.http.post<any>('/api/user', { username, password }).pipe(
      map(user => {
        return user;
      })
    );
  }
}
