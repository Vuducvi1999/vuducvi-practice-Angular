import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsingNgformComponent } from './using-ngform.component';

describe('UsingNgformComponent', () => {
  let component: UsingNgformComponent;
  let fixture: ComponentFixture<UsingNgformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsingNgformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsingNgformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
