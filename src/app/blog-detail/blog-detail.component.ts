import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { BlogService } from '../services/blog.service';
import { BlogPost } from '../models/blog-post.interface';
import * as AOS from 'aos';

@Component({
  selector: 'app-blog-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './blog-detail.component.html',
  styleUrl: './blog-detail.component.css'
})
export class BlogDetailComponent implements OnInit {
  post: BlogPost | undefined;
  relatedPosts: BlogPost[] = [];
  isLoading = true;
  notFound = false;

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

    this.route.params.subscribe(params => {
      const slug = params['slug'];
      this.loadPost(slug);
    });
  }

  loadPost(slug: string): void {
    this.isLoading = true;
    this.blogService.getPostBySlug(slug).subscribe(post => {
      if (post) {
        this.post = post;
        this.loadRelatedPosts(post);
        this.isLoading = false;
        this.notFound = false;
      } else {
        this.isLoading = false;
        this.notFound = true;
      }
    });
  }

  loadRelatedPosts(currentPost: BlogPost): void {
    this.blogService.getPostsByCategory(currentPost.category).subscribe(posts => {
      this.relatedPosts = posts
        .filter(p => p.id !== currentPost.id)
        .slice(0, 3);
    });
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
