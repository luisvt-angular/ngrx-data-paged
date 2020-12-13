import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostFormRoutingModule } from './post-form-routing.module';
import { PostFormComponent } from './post-form.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatxBackButtonModule } from 'angular-material-extended';


@NgModule({
  declarations: [PostFormComponent],
  imports: [
    CommonModule,
    PostFormRoutingModule,
    MatToolbarModule,
    MatxBackButtonModule
  ]
})
export class PostFormModule { }
