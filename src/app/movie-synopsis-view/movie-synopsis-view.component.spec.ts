import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieSynopsisViewComponent } from './movie-synopsis-view.component';

describe('MovieSynopsisViewComponent', () => {
  let component: MovieSynopsisViewComponent;
  let fixture: ComponentFixture<MovieSynopsisViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieSynopsisViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieSynopsisViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
