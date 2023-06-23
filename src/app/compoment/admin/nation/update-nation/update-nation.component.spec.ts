import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateNationComponent } from './update-nation.component';

describe('UpdateNationComponent', () => {
  let component: UpdateNationComponent;
  let fixture: ComponentFixture<UpdateNationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateNationComponent]
    });
    fixture = TestBed.createComponent(UpdateNationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
