import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageFilmComponent } from './page-film.component';

describe('PageFilmComponent', () => {
  let component: PageFilmComponent;
  let fixture: ComponentFixture<PageFilmComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageFilmComponent]
    });
    fixture = TestBed.createComponent(PageFilmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
