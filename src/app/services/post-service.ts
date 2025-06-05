import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Post } from '../models/post';
import { apiLink } from '../api/api-link';
import { delay, finalize, Observable } from 'rxjs';
import { LoadingService } from './loading-service';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  http: HttpClient = inject(HttpClient)

  constructor(private loadingService: LoadingService) { }

  fetchUserPosts(id: number) :Observable<Post>{ 
    let path = `${apiLink}/posts?userId=${id}`;
    return this.http.get<Post>(path);
  }

  gatherPostInfo(id: string) :Observable<Post>{
    this.loadingService.setLoading(true)
    let path = `${apiLink}/posts/${id}`
    return this.http.get<Post>(path).pipe(
      delay(400),
      finalize(() => {
        this.loadingService.setLoading(false)
      })
    )
  }

  fetchAllPosts(): Observable<Post[]>{
    this.loadingService.setLoading(true);
    let path = `${apiLink}/posts`
    return this.http.get<Post[]>(path).pipe(
      delay(400),
      finalize(() => {
        this.loadingService.setLoading(false)
      })
    )
  }
}
