import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteNationComponent } from './delete-nation.component';

describe('DeleteNationComponent', () => {
  let component: DeleteNationComponent;
  let fixture: ComponentFixture<DeleteNationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteNationComponent]
    });
    fixture = TestBed.createComponent(DeleteNationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
