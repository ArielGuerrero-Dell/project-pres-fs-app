import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiNamesFormComponent } from './api-names-form.component';

describe('ApiNamesFormComponent', () => {
  let component: ApiNamesFormComponent;
  let fixture: ComponentFixture<ApiNamesFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ApiNamesFormComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiNamesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
