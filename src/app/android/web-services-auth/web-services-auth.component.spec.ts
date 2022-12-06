import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebServicesAuthComponent } from './web-services-auth.component';

describe('WebServicesAuthComponent', () => {
  let component: WebServicesAuthComponent;
  let fixture: ComponentFixture<WebServicesAuthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebServicesAuthComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WebServicesAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
