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
   * Takes the information in the user form (this.userData)
   * and sends it to fetchApiData.updateUserDetails
   */
  editUserProfile(): void {
    const username = localStorage.getItem('Username') || '';
    this.fetchApiData
      .editUserProfile(username, this.userData)
      .subscribe((response) => {
        console.log(response);
        console.log(this.userData);
        this.dialogRef.close();
        window.location.reload();
      });
  }

  cancel(): void {
    this.dialogRef.close();
  }
}
