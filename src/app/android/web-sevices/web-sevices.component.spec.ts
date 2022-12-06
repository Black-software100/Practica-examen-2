import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebSevicesComponent } from './web-sevices.component';

describe('WebSevicesComponent', () => {
  let component: WebSevicesComponent;
  let fixture: ComponentFixture<WebSevicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebSevicesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WebSevicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
