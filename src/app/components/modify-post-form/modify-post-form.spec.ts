import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyPostForm } from './modify-post-form';

describe('ModifyPostForm', () => {
  let component: ModifyPostForm;
  let fixture: ComponentFixture<ModifyPostForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModifyPostForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifyPostForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
