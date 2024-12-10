import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertiesHomeComponent } from './properties-home.component';

describe('PropertiesHomeComponent', () => {
  let component: PropertiesHomeComponent;
  let fixture: ComponentFixture<PropertiesHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PropertiesHomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PropertiesHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
