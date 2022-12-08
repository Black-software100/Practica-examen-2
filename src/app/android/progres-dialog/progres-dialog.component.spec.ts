import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgresDialogComponent } from './progres-dialog.component';

describe('ProgresDialogComponent', () => {
  let component: ProgresDialogComponent;
  let fixture: ComponentFixture<ProgresDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgresDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgresDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
