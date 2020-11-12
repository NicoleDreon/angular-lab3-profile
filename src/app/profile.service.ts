import { Injectable } from '@angular/core';
import { UserProfile } from './interfaces/user-profile';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  userProfile: UserProfile = {
    name: 'Nicole',
    contact: '313-313-3131',
    bio: 'I love the sunshine!',
  };

  constructor() {}

  // will return an object
  getUserProfile = () => {
    return this.userProfile;
  };

  setUserProfile = (newUserProfile: UserProfile): void => {
    this.userProfile = newUserProfile;
  };
}
