import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { BlogService } from '../services/blog.service';
import { BlogPost } from '../models/blog-post.interface';
import * as AOS from 'aos';

@Component({
  selector: 'app-blog-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './blog-list.component.html',
  styleUrl: './blog-list.component.css'
})
export class BlogListComponent implements OnInit {
  posts: BlogPost[] = [];
  filteredPosts: BlogPost[] = [];
  selectedCategory: string | null = null;
  categories = ['Budgeting', 'Investment', 'Digital Finance'];
  isLoading = true;

  constructor(
    private blogService: BlogService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    AOS.init({
      duration: 1200,
      easing: 'ease-out-cubic',
      once: true,
      mirror: false,
      offset: 100,
      delay: 0
    });

    // Refresh AOS on route changes
    setTimeout(() => {
      AOS.refresh();
    }, 100);

    // Get category from query params
    this.route.queryParams.subscribe(params => {
      this.selectedCategory = params['category'] || null;
      this.loadPosts();
    });
  }

  loadPosts(): void {
    this.isLoading = true;
    if (this.selectedCategory) {
      this.blogService.getPostsByCategory(this.selectedCategory).subscribe(posts => {
        this.posts = posts;
        this.filteredPosts = posts;
        this.isLoading = false;
      });
    } else {
      this.blogService.getAllPosts().subscribe(posts => {
        this.posts = posts;
        this.filteredPosts = posts;
        this.isLoading = false;
      });
    }
  }

  filterByCategory(category: string | null): void {
    this.selectedCategory = category;
    if (category) {
      this.filteredPosts = this.posts.filter(p => p.category === category);
    } else {
      this.filteredPosts = this.posts;
    }
  }

  getCategoryColor(category: string): string {
    const colors: { [key: string]: string } = {
      'Budgeting': 'bg-blue-100 text-blue-800',
      'Investment': 'bg-indigo-100 text-indigo-800',
      'Digital Finance': 'bg-green-100 text-green-800'
    };
    return colors[category] || 'bg-gray-100 text-gray-800';
  }
}
