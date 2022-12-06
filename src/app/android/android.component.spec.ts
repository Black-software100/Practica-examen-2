import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ANDROIDComponent } from './android.component';

describe('ANDROIDComponent', () => {
  let component: ANDROIDComponent;
  let fixture: ComponentFixture<ANDROIDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ANDROIDComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ANDROIDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
