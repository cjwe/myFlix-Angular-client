import { Component, OnInit } from '@angular/core';
import { FetchApiDataService } from '../fetch-api-data.service';
import { MatDialog } from '@angular/material/dialog';

// Movie card components
import { MovieSynopsisViewComponent } from '../movie-synopsis-view/movie-synopsis-view.component';
import { MovieDirectorViewComponent } from '../movie-director-view/movie-director-view.component';
import { MovieGenreViewComponent } from '../movie-genre-view/movie-genre-view.component';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss'],
})
export class MovieCardComponent {
  movies: any[] = [];
  favorites: any[] = [];
  opened = false;

  constructor(
    public fetchApiData: FetchApiDataService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.getMovies();
  }

  // Get list of all movies
  getMovies(): void {
    this.fetchApiData.getAllMovies().subscribe((response: any) => {
      this.movies = response;
      console.log(this.movies);
      return this.movies;
    });
  }

  // Get list of user favorites
  getFavs(): void {
    this.fetchApiData.getUser().subscribe((resp: any) => {
      this.favorites = resp.FavoriteMovies;
      console.log(this.favorites);
      return this.favorites;
    });
  }

  // Returns if id of favorited movies
  isFavorited(id: string): boolean {
    return this.favorites.includes(id);
  }

  // Adds movie to favorites
  handleFavorite(id: string): void {
    this.fetchApiData.addFavorite(id).subscribe(() => {
      this.getFavs();
    });
  }

  // Removes movie from favorites
  handleUnfavorite(id: string): void {
    this.fetchApiData.deleteFavorite(id).subscribe(() => {
      this.getFavs();
    });
  }
  // Opens director dialog
  openDirector(name: string, bio: string, birth: string): void {
    this.dialog.open(MovieDirectorViewComponent, {
      data: {
        Name: name,
        Bio: bio,
        Birth: birth,
      },
      width: '500px',
    });
  }

  // Opens genre dialog
  openGenre(name: string, description: string): void {
    this.dialog.open(MovieGenreViewComponent, {
      data: {
        Name: name,
        Description: description,
      },
      width: '500px',
    });
  }
  // Opens synopsis dialog
  openSynopsis(title: string, imagePath: any, description: string): void {
    this.dialog.open(MovieSynopsisViewComponent, {
      data: {
        Title: title,
        ImagePath: imagePath,
        Description: description,
      },
      width: '500px',
    });
  }
}
