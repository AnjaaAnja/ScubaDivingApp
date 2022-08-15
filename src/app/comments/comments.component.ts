import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import mongoose from 'mongoose';
import { DataService } from '../data.service';
import { Comment } from '../models/comment';
import { User } from '../models/user';
import { take } from 'rxjs/operators';
@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss'],
})
export class CommentsComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private dataService: DataService,
    private router: Router
  ) {}
  public orgId: any;
  public userID: string = '';
  public currentUser: User = new User();
  public comments: Array<any> = [];
  public newComment: Comment = new Comment();

  ngOnInit(): void {
    this.dataService.currentUser$.pipe(take(1)).subscribe((response: any) => {
      this.currentUser = response;
      if (localStorage.length == 0) {
        window.alert('Please log in first');
        this.router.navigateByUrl('/organizations');
      }
      this.route.queryParams.subscribe((params) => {
        this.orgId = params['orgId'];
      });
      this.getAllComments();
    });
  }
  getAllComments() {
    this.dataService
      .getAllCommentsForOrganization(this.orgId)
      .subscribe((response: any) => {
        this.comments = response;
      });
  }
  addComment() {
    this.newComment.organizationID = this.orgId;
    this.newComment.user._id=this.currentUser._id;
    if (this.newComment.text == '') {
      window.alert('Please write a comment first');
      return;
    } else {
      this.dataService
        .addComment(this.newComment)
        .subscribe((response: Array<any>) => {});
    }
  }
  deleteComment(commentID: string) {
    this.dataService.deleteComment(commentID).subscribe((response: any) => {});
  }
}
