import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostsComponent } from './posts.component';

const routes: Routes = [
  {path: '', component: PostsComponent},
  {path: 'edit/:id', loadChildren: () => import('./post-form/post-form.module').then(m => m.PostFormModule)}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule {}
