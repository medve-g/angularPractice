import { Component } from '@angular/core';
import { PaginatedPostContainer } from '../../components/paginated-post-container/paginated-post-container';

@Component({
  selector: 'app-posts-page',
  imports: [PaginatedPostContainer],
  templateUrl: './posts-page.html',
  styleUrl: './posts-page.css'
})
export class PostsPage {
  
}
