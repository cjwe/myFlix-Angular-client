import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserUpdateFormComponent } from '../user-update-form/user-update-form.component';
import { FetchApiDataService } from '../fetch-api-data.service';

@Component({
  selector: 'app-profile-view',
  templateUrl: './profile-view.component.html',
  styleUrls: ['./profile-view.component.scss'],
})
export class ProfileViewComponent implements OnInit {
  user: any = {};
  favorites: any[] = [];

  constructor(
    public fetchApiData: FetchApiDataService,
    public snackBar: MatSnackBar,
    public dialog: MatDialog,
    public router: Router
  ) {}

  /**
   * Gets user profile when the page is opened
   */
  ngOnInit(): void {
    this.getUser();
  }

  // Gets user data to display
  getUser(): void {
    let user = localStorage.getItem('Username');
    console.log(user);
    this.fetchApiData.getUser().subscribe((res: any) => {
      this.user = res;
      this.getFavorites();
    });
  }

  // Open dialog with user form component to update user details
  updateUserDetails(): void {
    this.dialog.open(UserUpdateFormComponent, { width: '500px' });
  }

  // Get user favorites
  getFavorites(): void {
    this.fetchApiData.getAllMovies().subscribe((res: any) => {
      this.favorites = res.filter((movie: any) => {
        return this.user.FavoriteMovies.includes(movie._id);
      });
      console.log(this.favorites);
      return this.favorites;
    });
  }

  // Delete a user favorite
  deleteFavorite(id: string): void {
    this.fetchApiData.deleteFavorite(id).subscribe((res: any) => {
      this.snackBar.open(`Successfully removed from favorite movies.`, 'OK', {
        duration: 2000,
      });
      this.ngOnInit();
      return this.favorites;
    });
  }

  // Open confirmation to delete profile or cancel, if confirmed deletes account and clears local storage, reroutes to welcome screen.
  deleteUser(): void {
    if (confirm('Are you sure? This cannot be undone.')) {
      this.fetchApiData.deleteUser().subscribe(
        () => {
          this.snackBar.open('Your account was deleted.', 'OK', {
            duration: 3000,
          });
          localStorage.clear();
        },
        () => {
          this.router.navigate(['welcome']).then(() => {
            window.location.reload();
          });
        }
      );
    }
  }
}
