import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-job-seeker-home',
  templateUrl: './job-seeker-home.component.html',
  styleUrls: ['./job-seeker-home.component.css']
})
export class JobSeekerHomeComponent implements OnInit {
  private userId: number;

  constructor(public router: Router) { }

  ngOnInit(): void {
    // tslint:disable-next-line:radix
    this.userId = parseInt(localStorage.getItem('user_id'));
    if (!this.userId) {
      this.router.navigate(['/login']);
    }
  }

  logout() {
    localStorage.removeItem('user_id');
  }
}
