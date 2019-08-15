import { Component, Input, OnInit } from '@angular/core';
import { TweetModel } from '../../../models/tweet.model';
import { UserDataModel } from '../../../models/user-data.model';
import { AuthService } from '../../../services/auth.service';
import { UserService } from '../../../services/user/user.service';

@Component({
  selector: 'app-user-tweets-table',
  templateUrl: './user-tweets-table.component.html',
  styleUrls: ['./user-tweets-table.component.css']
})
export class UserTweetsTableComponent implements OnInit {

  @Input() tweets: TweetModel[];
  userData: UserDataModel;

  constructor(private userService: UserService, private authService: AuthService) { }

  ngOnInit() {
    this.userService.fetchUserData(this.authService.getCurrentUser()).subscribe(userData => {
      this.userData = userData;
    });
  }
}
