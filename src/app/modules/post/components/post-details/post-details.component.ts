import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../../models/post.model';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css'],
})
export class PostDetailsComponent implements OnInit {
  entity: Post;
  // ActivatedRoute中包含了路由中的一些参数信息
  constructor(
    private route: ActivatedRoute,
    private postService: PostService,
  ) {}

  ngOnInit() {
    // 通过route的paramMap订阅路由中的相关信息 再采用get方法获取ID（注意此时返回为字符串）
    this.route.paramMap.subscribe(params => {
      const postId = Number(params.get('id'));
      // this.entity = posts.find(post => post.id === postId);
      this.entity = this.postService.show(postId);
      console.log(postId);
    });
  }
}
