import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-job-agency-home',
  templateUrl: './job-agency-home.component.html',
  styleUrls: ['./job-agency-home.component.css']
})
export class JobAgencyHomeComponent implements OnInit {
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
