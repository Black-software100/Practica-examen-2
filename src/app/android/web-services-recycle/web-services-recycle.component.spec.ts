import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebServicesRecycleComponent } from './web-services-recycle.component';

describe('WebServicesRecycleComponent', () => {
  let component: WebServicesRecycleComponent;
  let fixture: ComponentFixture<WebServicesRecycleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebServicesRecycleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WebServicesRecycleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
