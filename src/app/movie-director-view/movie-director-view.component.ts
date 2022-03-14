/**
 * Renders a view of the director of a selected movie.
 */

import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-movie-director-view',
  templateUrl: './movie-director-view.component.html',
  styleUrls: ['./movie-director-view.component.scss'],
})
export class MovieDirectorViewComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: {
      Name: string;
      Bio: string;
      Birth: string;
    }
  ) {}

  ngOnInit(): void {}
}
