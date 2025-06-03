import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { User } from '../models/user';
import { delay, finalize, Observable } from 'rxjs';
import { userApiUrl } from '../apiLink';
import { LoadingService } from './loading-service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  http: HttpClient = inject(HttpClient)

  constructor(private loadingService:LoadingService) { }

  public fetchUser() :Observable<User> {
    this.loadingService.setLoading(true);
    return this.http.get<User>(userApiUrl).pipe(
      delay(1500),
      finalize(()=>{
        this.loadingService.setLoading(false);
      })
    )
  }
}
