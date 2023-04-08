import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconosComponent } from './iconos.component';

describe('IconosComponent', () => {
  let component: IconosComponent;
  let fixture: ComponentFixture<IconosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IconosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
