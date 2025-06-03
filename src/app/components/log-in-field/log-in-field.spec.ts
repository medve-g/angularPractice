import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogInField } from './log-in-field';

describe('LogInField', () => {
  let component: LogInField;
  let fixture: ComponentFixture<LogInField>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LogInField]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogInField);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
