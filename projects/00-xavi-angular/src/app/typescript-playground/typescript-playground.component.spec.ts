import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypescriptPlaygroundComponent } from './typescript-playground.component';

describe('TypescriptPlaygroundComponent', () => {
  let component: TypescriptPlaygroundComponent;
  let fixture: ComponentFixture<TypescriptPlaygroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TypescriptPlaygroundComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TypescriptPlaygroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
