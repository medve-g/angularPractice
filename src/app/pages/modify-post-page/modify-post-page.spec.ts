import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyPostPage } from './modify-post-page';

describe('ModifyPostPage', () => {
  let component: ModifyPostPage;
  let fixture: ComponentFixture<ModifyPostPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModifyPostPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifyPostPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
