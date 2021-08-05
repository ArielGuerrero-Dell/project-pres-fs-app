import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiNamesComponent } from './api-names.component';

describe('ApiNamesComponent', () => {
  let component: ApiNamesComponent;
  let fixture: ComponentFixture<ApiNamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ApiNamesComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiNamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
