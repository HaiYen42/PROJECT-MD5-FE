import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageUserFilmComponent } from './page-user-film.component';

describe('ListFilmComponent', () => {
  let component: PageUserFilmComponent;
  let fixture: ComponentFixture<PageUserFilmComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageUserFilmComponent]
    });
    fixture = TestBed.createComponent(PageUserFilmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
