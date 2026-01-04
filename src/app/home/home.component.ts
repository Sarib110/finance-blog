import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BlogService } from '../services/blog.service';
import { BlogPost } from '../models/blog-post.interface';
import * as AOS from 'aos';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  featuredPosts: BlogPost[] = [];
  recentPosts: BlogPost[] = [];

  constructor(private blogService: BlogService) {}

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

    this.loadFeaturedPosts();
    this.loadRecentPosts();
  }

  loadFeaturedPosts(): void {
    this.blogService.getFeaturedPosts().subscribe(posts => {
      this.featuredPosts = posts;
    });
  }

  loadRecentPosts(): void {
    this.blogService.getRecentPosts(3).subscribe(posts => {
      this.recentPosts = posts;
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
