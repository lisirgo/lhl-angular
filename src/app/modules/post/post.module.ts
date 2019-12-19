import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponent } from './post.component';
import { AppRoutingModule } from '../../app-routing.module';
import { PostItemComponent } from './components/post-item/post-item.component';
import { PostDetailsComponent } from './components/post-details/post-details.component';

@NgModule({
  //存储指令、管道、组件等
  declarations: [PostComponent, PostItemComponent, PostDetailsComponent],
  //模块相关的依赖
  imports: [CommonModule, AppRoutingModule],
  // 导出组件，以方便其他地方引用，注意导出的是组件 并不是module
  exports: [PostComponent],
})
export class PostModule {}
