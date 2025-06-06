import { Component, computed, effect, signal } from '@angular/core';
import { Post } from '../../models/post';
import { PostService } from '../../services/post-service';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-paginated-post-container',
  standalone: true,
  imports: [MatPaginatorModule, MatTableModule, FormsModule],
  templateUrl: './paginated-post-container.html',
  styleUrls: ['./paginated-post-container.css'],
})
export class PaginatedPostContainer {
  displayedColumns: string[] = ['id', 'title', 'body', 'userId'];
  dataSource = signal<Post[]>([]);
  postSearch = signal('');
  filteredPosts = computed(() => {
    const query = this.postSearch().toLowerCase();
    return this.dataSource().filter(post =>
      post.title.toLowerCase().includes(query) || post.body.toLowerCase().includes(query)
    );
  });

  currentPage = signal(0);
  pageSize = signal(5);

  pagedPosts = computed(() => {
    const start = this.currentPage() * this.pageSize();
    const end = start + this.pageSize();
    return this.filteredPosts().slice(start, end);
  });

  totalPages = computed(() =>
    Math.ceil(this.filteredPosts().length / this.pageSize())
  );

  selectoinChanged(event: Event){
    this.currentPage.set(0)
     const selectedValue = parseInt((event.target as HTMLSelectElement).value);
    this.pageSize.set(selectedValue)
  }

  constructor(private postService: PostService) {
    this.postService.fetchAllPosts().subscribe({
      next: (response) => this.dataSource.set(response),
      error: (err) => console.error(err),
    });

    effect(() => {
      this.postSearch();
      this.currentPage.set(0);
    });
  }

  decrementPage() {
    if (this.currentPage() > 0) {
      this.currentPage.update(p => p - 1);
    }
  }

  incrementPage() {
    if (this.currentPage() < this.totalPages() - 1) {
      this.currentPage.update(p => p + 1);
    }
  }

  goToLastPage() {
    this.currentPage.set(this.totalPages() - 1);
  }

  goToFirstPage(){
    this.currentPage.set(0);
  }
}
