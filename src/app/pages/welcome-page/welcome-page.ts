import { Component, OnInit } from '@angular/core';
import { Navbar } from '../../components/navbar/navbar';
import { PostService } from '../../services/post-service';
import { Post } from '../../models/post';

@Component({
  selector: 'app-welcome-page',
  imports: [],
  templateUrl: './welcome-page.html',
  styleUrl: './welcome-page.css'
})
export class WelcomePage implements OnInit {

  posts: any = [];
  constructor(private postService: PostService) {
    
  }


  ngOnInit(): void {
    this.postService.fetchPosts().subscribe({
      next: response => {
        this.posts = response
        console.log(this.posts)
      },
        error: error => {
          console.error(error)
        }
    })
  }
}
