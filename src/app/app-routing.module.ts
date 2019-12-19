import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostComponent } from './modules/post/post.component';
import { PostDetailsComponent } from './modules/post/components/post-details/post-details.component';

// 定义路由地址 同时需要指出对应的组件
const routes: Routes = [
  { path: 'posts', component: PostComponent },
  { path: 'posts/:id', component: PostDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
