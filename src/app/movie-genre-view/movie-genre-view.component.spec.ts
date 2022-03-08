import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieGenreViewComponent } from './movie-genre-view.component';

describe('MovieGenreViewComponent', () => {
  let component: MovieGenreViewComponent;
  let fixture: ComponentFixture<MovieGenreViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieGenreViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieGenreViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
