import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

import { Post } from './post.model';
import { PostsService } from './posts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  loadedPosts: Post[] = [];
  isFetching = false;
  error = null;
  errorSub: Subscription;
  @ViewChild('postForm', {static: false}) form: NgForm;

  constructor(private http: HttpClient,
              private postsService: PostsService) { }

  ngOnInit() {
    this.fetchPosts();
    this.errorSub = this.postsService.error.subscribe(error => {
      this.error = error;
    });
  }

  onCreatePost(postData: Post) {
    // Send Http request
    this.postsService.createAndStorePosts(postData.title, postData.content);
    this.fetchPosts();
    this.form.reset();
  }

  onFetchPosts() {
    // Send Http request
    this.fetchPosts();
    
  }

  onClearPosts() {
    // Send Http request
    this.postsService.deletePosts().subscribe(() => {
      this.loadedPosts = [];
    });
  }

  onHandleError() {
    this.error = null;
    this.isFetching = false;
  }

  private fetchPosts() {
    this.isFetching = true;
    this.postsService.fetchPosts().subscribe(posts => {
      this.isFetching = false
      this.loadedPosts = posts;
    }, error => {
      this.error = error.message;
    });
  }

  ngOnDestroy() {
    this.errorSub.unsubscribe();
  }
}
