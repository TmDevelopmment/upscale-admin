import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CutomerStatusManagerComponent } from './cutomer-status-manager.component';

describe('CutomerStatusManagerComponent', () => {
  let component: CutomerStatusManagerComponent;
  let fixture: ComponentFixture<CutomerStatusManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CutomerStatusManagerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CutomerStatusManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
