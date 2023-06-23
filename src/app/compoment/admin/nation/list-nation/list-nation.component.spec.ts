import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListNationComponent } from './list-nation.component';

describe('ListNationComponent', () => {
  let component: ListNationComponent;
  let fixture: ComponentFixture<ListNationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListNationComponent]
    });
    fixture = TestBed.createComponent(ListNationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
