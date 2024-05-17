import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomPipesPageComponent } from './custom-pipes-page.component';

describe('CustomPipesPageComponent', () => {
  let component: CustomPipesPageComponent;
  let fixture: ComponentFixture<CustomPipesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomPipesPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomPipesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
