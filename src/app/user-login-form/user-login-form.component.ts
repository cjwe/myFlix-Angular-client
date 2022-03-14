/**
 * Renders a view of the login form.
 */

import { Component, OnInit, Input } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog'; // closes dialog on success
import { MatSnackBar } from '@angular/material/snack-bar'; // display notifications
import { FetchApiDataService } from '../fetch-api-data.service'; // link to service with API response
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login-form',
  templateUrl: './user-login-form.component.html',
  styleUrls: ['./user-login-form.component.scss'],
})
export class UserLoginFormComponent implements OnInit {
  @Input() userData = { Username: '', Password: '' };

  constructor(
    public fetchApiData: FetchApiDataService,
    public dialogRef: MatDialogRef<UserLoginFormComponent>,
    public snackBar: MatSnackBar,
    public router: Router
  ) {}

  ngOnInit(): void {}

  /**
   * Sends request to API for jwt token and user data, then stores response in local storage.
   * App then routes to movie view and confirms login with snack bar message.
   * @returns snackbar message confirmation
   */
  loginUser(): void {
    this.fetchApiData.userLogin(this.userData).subscribe(
      // successful login
      (result) => {
        localStorage.setItem('Username', result.user.Username);
        localStorage.setItem('token', result.token);
        this.router.navigate(['movies']);
        this.dialogRef.close();
        // console.log(result);
        this.snackBar.open('User logged in!', 'OK', {
          duration: 2000,
        });
      },
      // error response
      (result) => {
        this.snackBar.open(result, 'OK', {
          duration: 4000,
        });
      }
    );
  }
}
