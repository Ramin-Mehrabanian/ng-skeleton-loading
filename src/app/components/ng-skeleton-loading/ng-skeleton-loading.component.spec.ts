import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgSkeletonLoadingComponent } from './ng-skeleton-loading.component';

describe('NgSkeletonLoadingComponent', () => {
  let component: NgSkeletonLoadingComponent;
  let fixture: ComponentFixture<NgSkeletonLoadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgSkeletonLoadingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgSkeletonLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
