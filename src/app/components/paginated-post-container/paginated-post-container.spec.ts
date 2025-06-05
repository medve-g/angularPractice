import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginatedPostContainer } from './paginated-post-container';

describe('PaginatedPostContainer', () => {
  let component: PaginatedPostContainer;
  let fixture: ComponentFixture<PaginatedPostContainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginatedPostContainer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginatedPostContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
