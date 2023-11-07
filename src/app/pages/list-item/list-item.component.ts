import posts from 'src/app/models/posts.model';
import { Component, OnInit, Inject } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
})
export class ListItemComponent implements OnInit {
  posts: any;
  selectPostId = 0;
  isCreateOrEdit = false;
  isLoading = false;
  titleCard = '';
  formData: FormGroup | any;
  loadingTimes: any;
  currentDate = new Intl.DateTimeFormat('id').format(new Date());

  constructor(private postService: PostsService) {
    this.loadingTimes = Array(5)
      .fill(0)
      .map((x, i) => i);
  }

  ngOnInit(): void {
    this.isLoading = true;
    this.postService.getPosts().subscribe((response) => {
      this.posts = response;
      this.isLoading = false;
    });

    this.formData = new FormGroup({
      title: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
    });
  }

  onSubmit(form: FormGroup): void {
    if (form.valid) {
      if (this.titleCard == 'Create Post') {
        this.posts.unshift({
          title: form.value.title,
          body: form.value.description,
          date: this.currentDate,
        });
      } else {
        this.posts[this.selectPostId] = {
          title: form.value.title,
          body: form.value.description,
        };
      }

      this.formData.reset();
      this.handleClick('');
    }
  }

  handleClick(msg = '', data?: any, postId?: number): void {
    this.isCreateOrEdit = !this.isCreateOrEdit;
    this.titleCard = msg;
    if (data) {
      this.selectPostId = postId || 0;
      this.formData.setValue({
        title: data.title,
        description: data.body,
      });
    } else this.formData.reset();
  }

  handleDelete(postId: number): void {
    this.posts.splice(postId, 1);
  }
}
