import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasInformacionComponent } from './mas-informacion.component';

describe('MasInformacionComponent', () => {
  let component: MasInformacionComponent;
  let fixture: ComponentFixture<MasInformacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MasInformacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MasInformacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
