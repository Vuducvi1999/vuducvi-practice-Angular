import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from './../interfaces/post.interface';
import { Observable } from 'rxjs';

@Injectable()
export class PostService {
  private _url: string = 'https://jsonplaceholder.typicode.com/posts';
  constructor(private http: HttpClient) {}
  getPost(): Observable<Post[]> {
    return this.http.get<Post[]>(this._url);
  }
}
