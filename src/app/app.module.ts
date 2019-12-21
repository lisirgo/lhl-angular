import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostModule } from './modules/post/post.module';
import { UserModule } from './modules/user/user.module';

@NgModule({
  declarations: [AppComponent],
  // 如果此模块想引用其他‘组件’，需要引入其对应的‘模块’，注意是模块，并非组件
  imports: [BrowserModule, AppRoutingModule, PostModule, UserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
