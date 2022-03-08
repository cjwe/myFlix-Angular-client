import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieDirectorViewComponent } from './movie-director-view.component';

describe('MovieDirectorViewComponent', () => {
  let component: MovieDirectorViewComponent;
  let fixture: ComponentFixture<MovieDirectorViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieDirectorViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieDirectorViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
