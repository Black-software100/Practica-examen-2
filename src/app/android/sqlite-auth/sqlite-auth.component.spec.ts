import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SqliteAuthComponent } from './sqlite-auth.component';

describe('SqliteAuthComponent', () => {
  let component: SqliteAuthComponent;
  let fixture: ComponentFixture<SqliteAuthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SqliteAuthComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SqliteAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
