import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Post } from '../../models/post.model';

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.css'],
})
export class PostItemComponent implements OnInit {
  // 通过@Input传值
  @Input()
  entity: Post;

  /*父组件通过@Output监听子组件事件 通过eventemitter触发事件
   *这里的remove对应父组件中的属性绑定
   */
  @Output()
  remove = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  /* 子组件中的点击删除事件
   *事件派发器是一种模式，它监听一个已命名的事件，触发回调，然后发出该事件并附带一个值
   */
  onClickRemoveFn(entity: Post) {
    this.remove.emit(entity);
  }
}
