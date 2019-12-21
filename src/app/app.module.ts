import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostModule } from './modules/post/post.module';
import { UserModule } from './modules/user/user.module';
import { HeaderComponent } from './core/components/header/header.component';
import { PageNotFoundComponent } from './core/components/page-not-found/page-not-found.component';
import { DemoModule } from './modules/demo/demo.module';
import { MessageBoxComponent } from './core/components/message-box/message-box.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, PageNotFoundComponent, MessageBoxComponent],
  // 如果此模块想引用其他‘组件’，需要引入其对应的‘模块’，注意是模块，并非组件
  //注意 其余模块要放在AppRoutingModule前面，否则会无法找到页面，进入404页面
  imports: [
    BrowserModule,
    PostModule,
    UserModule,
    DemoModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
