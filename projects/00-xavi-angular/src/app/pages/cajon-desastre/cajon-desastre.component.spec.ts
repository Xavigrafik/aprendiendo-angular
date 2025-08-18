import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CajonDesastreComponent } from './cajon-desastre.component';

describe('CajonDesastreComponent', () => {
  let component: CajonDesastreComponent;
  let fixture: ComponentFixture<CajonDesastreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CajonDesastreComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CajonDesastreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
