import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
  FormBuilder,
} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  // username = new FormControl();

  // 通过formgroup创建表单
  // registerForm = new FormGroup({
  //   // 第一个值为表单元素的初始值，第二个是验证（多个用数组的形式）
  //   username: new FormControl('', Validators.required),
  //   password: new FormControl('', [
  //     Validators.minLength(6),
  //     Validators.required,
  //   ]),
  // });

  // 通过formbuilder服务创建表单
  registerForm = this.formBuilder.group({
    username: ['', Validators.required],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });
  // formbuilder是一个服务，所以要写在constructor中
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    // 单独订阅valueChange事件
    // this.username.valueChanges.subscribe(value => {
    //   console.log(value);
    // });
    // 通过setValue设置value的初始值
    // this.username.setValue('lisirgo');

    // 通过registerform订阅vaulechange事件
    this.registerForm.valueChanges.subscribe(value => {
      console.log('registerForm:', this.registerForm.value);
    });
    this.registerForm.setValue({
      username: 'lisirgo',
      password: '111111',
    });
    // 时时验证表单值是否符合FormControl的规则 正确返回大写的VALID
    this.registerForm.statusChanges.subscribe(status => {
      console.log('status:', status);
    });
  }

  // 自定义提交事件 提交表单用ngSubmit事件
  onSubmit() {
    console.log('Submit:', this.registerForm.value);
  }
}
