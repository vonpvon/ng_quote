import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelQouteComponent } from './panel-qoute.component';

describe('PanelQouteComponent', () => {
  let component: PanelQouteComponent;
  let fixture: ComponentFixture<PanelQouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PanelQouteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PanelQouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
