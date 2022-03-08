import { Component, OnInit } from '@angular/core';
import { FetchApiDataService } from '../fetch-api-data.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss'],
})
export class MovieCardComponent {
  movies: any[] = [];
  favorites: any[] = [];

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

  isFavorited(id: string): boolean {
    return this.favorites.includes(id);
  }

  handleFavorite(id: string): void {
    this.fetchApiData.addFavorite(id).subscribe(() => {
      this.getFavs();
    });
  }

  handleUnfavorite(id: string): void {
    this.fetchApiData.deleteFavorite(id).subscribe(() => {
      this.getFavs();
    });
  }
}
