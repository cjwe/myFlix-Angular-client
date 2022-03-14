/**
 * Renders a view of the genre of a selected movie.
 */

import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-movie-genre-view',
  templateUrl: './movie-genre-view.component.html',
  styleUrls: ['./movie-genre-view.component.scss'],
})
export class MovieGenreViewComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: {
      Name: string;
      Description: string;
    }
  ) {}

  ngOnInit(): void {}
}
