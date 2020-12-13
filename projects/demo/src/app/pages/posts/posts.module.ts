import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsRoutingModule } from './posts-routing.module';
import { PostsComponent } from './posts.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatxMenuButtonModule } from 'angular-material-extended';
import { DtTableModule } from 'ngx-dt-table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';


@NgModule({
  declarations: [PostsComponent],
  imports: [
    CommonModule,
    PostsRoutingModule,
    MatToolbarModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatxMenuButtonModule,
    DtTableModule
  ]
})
export class PostsModule { }
