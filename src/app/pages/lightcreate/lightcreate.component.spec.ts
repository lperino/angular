import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LightcreateComponent } from './lightcreate.component';

describe('LightcreateComponent', () => {
  let component: LightcreateComponent;
  let fixture: ComponentFixture<LightcreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LightcreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LightcreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
