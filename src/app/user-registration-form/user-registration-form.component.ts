/**
 * Renders a view of the registration form.
 */

import { Component, OnInit, Input } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog'; // closes dialog on success
import { MatSnackBar } from '@angular/material/snack-bar'; // display notifications
import { FetchApiDataService } from '../fetch-api-data.service'; // link to service with API response

@Component({
  selector: 'app-user-registration-form',
  templateUrl: './user-registration-form.component.html',
  styleUrls: ['./user-registration-form.component.scss'],
})
export class UserRegistrationFormComponent implements OnInit {
  @Input() userData = { Username: '', Password: '', Email: '', Birthday: '' };

  constructor(
    public fetchApiData: FetchApiDataService,
    public dialogRef: MatDialogRef<UserRegistrationFormComponent>,
    public snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {}

  /**
   * Sends data from userData form to API for registration then closes registration dialog.
   * @returns snackbar message confirmation
   */
  registerUser(): void {
    this.fetchApiData.userRegistration(this.userData).subscribe(
      (result) => {
        // successful registration
        this.dialogRef.close();
        // console.log(result);
        this.snackBar.open('User registration succesful!', 'OK', {
          duration: 2000,
        });
      },
      (result) => {
        // error response
        this.snackBar.open(result, 'OK', {
          duration: 4000,
        });
      }
    );
  }
}
