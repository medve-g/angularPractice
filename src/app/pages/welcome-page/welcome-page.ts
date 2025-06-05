import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post-service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-welcome-page',
  imports: [RouterLink],
  templateUrl: './welcome-page.html',
  styleUrl: './welcome-page.css'
})
export class WelcomePage implements OnInit {

  posts: any = [];
  userId: number = 0;
  constructor(private postService: PostService) {

  }

  ngOnInit(): void {
    let user = localStorage.getItem("user");
    if (user == null || user.length == 0) {
      return;
    }
    let parsedUser = JSON.parse(user);
    this.userId = parsedUser.id;
    this.postService.fetchPosts(this.userId).subscribe({
      next: response => {
        this.posts = response;
      },
      error: error => {
        console.error(error);
      }
    })
  }
}
