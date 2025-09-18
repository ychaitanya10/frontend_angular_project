import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyLocationComponent } from './modify-location.component';

describe('ModifyLocationComponent', () => {
  let component: ModifyLocationComponent;
  let fixture: ComponentFixture<ModifyLocationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModifyLocationComponent]
    });
    fixture = TestBed.createComponent(ModifyLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
