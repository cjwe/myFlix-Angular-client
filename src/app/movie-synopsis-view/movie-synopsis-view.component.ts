/**
 * Renders a view of the synopsis of a selected movie.
 */

import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-movie-synopsis-view',
  templateUrl: './movie-synopsis-view.component.html',
  styleUrls: ['./movie-synopsis-view.component.scss'],
})
export class MovieSynopsisViewComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: {
      Title: string;
      ImagePath: any;
      Description: string;
      Genre: string;
    }
  ) {}

  ngOnInit(): void {}
}
