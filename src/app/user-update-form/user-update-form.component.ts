/**
 * Renders a view of the user update form.
 */

import { Component, OnInit, Input } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FetchApiDataService } from '../fetch-api-data.service';

@Component({
  selector: 'app-user-update-form',
  templateUrl: './user-update-form.component.html',
  styleUrls: ['./user-update-form.component.scss'],
})
export class UserUpdateFormComponent implements OnInit {
  @Input() userData = {
    Username: '',
    Password: '',
    Email: '',
    Birthday: '',
  };

  constructor(
    public fetchApiData: FetchApiDataService,
    public dialogRef: MatDialogRef<UserUpdateFormComponent>
  ) {}

  ngOnInit(): void {}

  /**
   * Sends data from userData form to API to update user data then closes update dialog and reloads user profile page.
   */
  editUserProfile(): void {
    const username = localStorage.getItem('Username') || '';
    this.fetchApiData
      .editUserProfile(username, this.userData)
      .subscribe((response) => {
        // console.log(response);
        // console.log(this.userData);
        this.dialogRef.close();
        window.location.reload();
      });
  }

  // Closes dialog with no changes saved
  cancel(): void {
    this.dialogRef.close();
  }
}
