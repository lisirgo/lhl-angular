import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterComponent } from './modules/user/components/register/register.component';
import { PageNotFoundComponent } from './core/components/page-not-found/page-not-found.component';
import { MessageBoxComponent } from './core/components/message-box/message-box.component';

// 定义路由地址 同时需要指出对应的组件
const routes: Routes = [
  {
    path: '',
    redirectTo: '/posts',
    pathMatch: 'full',
  },
  {
    path: 'message',
    component: MessageBoxComponent,
    outlet: 'popup', //二级路由要设计一个outlet 用来显示对应的哪一个outlet里面
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
