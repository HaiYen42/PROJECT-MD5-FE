import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateFilmComponent } from './create-film.component';

describe('CreateFilmComponent', () => {
  let component: CreateFilmComponent;
  let fixture: ComponentFixture<CreateFilmComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateFilmComponent]
    });
    fixture = TestBed.createComponent(CreateFilmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
