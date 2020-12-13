import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../../../models/post';
import { PostsService } from '../../../services/posts.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit {
  post$: Observable<Post>;

  constructor(postsSvc: PostsService, route: ActivatedRoute) {
    this.post$ = postsSvc.getByKey(Number(route.snapshot.params.id));
  }

  ngOnInit(): void {
  }

}
