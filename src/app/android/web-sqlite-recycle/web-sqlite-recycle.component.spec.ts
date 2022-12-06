import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebSqliteRecycleComponent } from './web-sqlite-recycle.component';

describe('WebSqliteRecycleComponent', () => {
  let component: WebSqliteRecycleComponent;
  let fixture: ComponentFixture<WebSqliteRecycleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebSqliteRecycleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WebSqliteRecycleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
