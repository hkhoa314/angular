import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientlayoutComponent } from './clientlayout.component';

describe('ClientlayoutComponent', () => {
  let component: ClientlayoutComponent;
  let fixture: ComponentFixture<ClientlayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientlayoutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClientlayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
