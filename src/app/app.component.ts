import { Component, OnDestroy, OnInit } from '@angular/core';
import { SubscriptionLike } from 'rxjs';
import { Post } from './interfaces/post.interface';
import { PostService } from './services/post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [PostService],
})
export class AppComponent implements OnInit, OnDestroy {
  post: Post[] = [{ userId: 1, id: 1, body: 'asdad', title: 'adsad' }];
  subscription: SubscriptionLike;

  constructor(private _service: PostService) {}
  ngOnInit() {
    this.subscription = this._service
      .getPost()
      .subscribe((data) => (this.post = data));
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
