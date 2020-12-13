import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../../models/post';
import { PostsService } from '../../services/posts.service';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  posts$: Observable<Post[]>;
  total$: Observable<number>;
  loading$: Observable<boolean>;
  page = {
    size: 10,
    index: 1
  };

  constructor(private postsSvc: PostsService) {
    this.posts$ = postsSvc.entities$;
    this.total$ = postsSvc.total$;
    this.loading$ = postsSvc.loading$;
    this.findPage();
  }

  ngOnInit(): void {
  }

  findPage(event?: PageEvent): void {
    if (event) {
      this.page.size = event.pageSize;
      this.page.index = event.pageIndex + 1;
    }
    this.postsSvc.getPageWithQuery({
      _page: this.page.index.toString(),
      _limit: this.page.size.toString()
    });
  }
}
