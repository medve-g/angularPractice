import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Post } from '../models/post';
import { linkForPosts } from '../api/postLink';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  http: HttpClient = inject(HttpClient)

  constructor() { }

  fetchPosts() :Observable<Post>{ 
    return this.http.get<Post>(linkForPosts)
  }
}
