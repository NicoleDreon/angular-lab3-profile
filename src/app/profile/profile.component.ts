import { Component, OnInit } from '@angular/core';
import { UserProfile } from '../interfaces/user-profile';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  //below place holder that will handle infomation when needed
  userProfile: UserProfile = null;
  //below is the dependance injection of
  constructor(private service: ProfileService) {}

  ngOnInit(): void {
    this.userProfile = this.service.getUserProfile();
    console.log(this.userProfile);
  }
}
