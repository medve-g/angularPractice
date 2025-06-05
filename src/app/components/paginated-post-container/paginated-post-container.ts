import { Component, computed, effect, signal } from '@angular/core';
import { Post } from '../../models/post';
import { PostService } from '../../services/post-service';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-paginated-post-container',
  imports: [MatPaginatorModule, MatTableModule, FormsModule],
  templateUrl: './paginated-post-container.html',
  styleUrls: ['./paginated-post-container.css'],
})
export class PaginatedPostContainer {
  displayedColumns: string[] = ['id', 'title', 'body', 'userId'];
  dataSource = signal<Post[]>([])
  postSearch = signal("");
  filteredPosts = signal<Post[]>([]);

  currentPage = signal(1);
  pageSize = signal(5);

  constructor(private postService: PostService) {
    effect(() => {
      this.filteredPosts.set(this.dataSource().filter(post =>
        post.title.toLowerCase().includes(this.postSearch().toLowerCase()) ||
        post.body.toLowerCase().includes(this.postSearch().toLowerCase())
      ))
    })


    this.postService.fetchAllPosts().subscribe({
      next: (response) => {
        this.dataSource.set(response)
      },
      error: (err) => {
        console.error(err);
      },
    });
  }

  decrementPage() {
    this.currentPage.update(prev => prev - 1)
  }
}
