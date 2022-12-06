import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirestoreRecycleComponent } from './firestore-recycle.component';

describe('FirestoreRecycleComponent', () => {
  let component: FirestoreRecycleComponent;
  let fixture: ComponentFixture<FirestoreRecycleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirestoreRecycleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirestoreRecycleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
