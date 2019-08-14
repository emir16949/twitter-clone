import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { UserDataModel } from '../../../models/user-data.model';
import { AuthService } from '../../../services/auth.service';
import { UserService } from '../../../services/user/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  userData: UserDataModel;

  constructor(private userService: UserService, private authService: AuthService) { }

  ngOnInit() {
    this.userService.fetchUserData(this.authService.getCurrentUser()).subscribe(userData => {
      this.userData = userData;
    }
    );
  }
}
