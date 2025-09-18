import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyTopicComponent } from './modify-topic.component';

describe('ModifyTopicComponent', () => {
  let component: ModifyTopicComponent;
  let fixture: ComponentFixture<ModifyTopicComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModifyTopicComponent]
    });
    fixture = TestBed.createComponent(ModifyTopicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
