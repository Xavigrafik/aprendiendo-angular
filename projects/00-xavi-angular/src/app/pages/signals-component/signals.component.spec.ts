import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CajonDesastre2Component } from './signals.component';

describe('CajonDesastreComponent', () => {
  let component: CajonDesastre2Component;
  let fixture: ComponentFixture<CajonDesastre2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CajonDesastre2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CajonDesastre2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
