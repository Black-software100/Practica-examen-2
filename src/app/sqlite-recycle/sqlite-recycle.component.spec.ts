import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SqliteRecycleComponent } from './sqlite-recycle.component';

describe('SqliteRecycleComponent', () => {
  let component: SqliteRecycleComponent;
  let fixture: ComponentFixture<SqliteRecycleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SqliteRecycleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SqliteRecycleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
