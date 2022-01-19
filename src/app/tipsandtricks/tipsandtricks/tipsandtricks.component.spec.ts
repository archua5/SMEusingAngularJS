import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipsandtricksComponent } from './tipsandtricks.component';

describe('TipsandtricksComponent', () => {
  let component: TipsandtricksComponent;
  let fixture: ComponentFixture<TipsandtricksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipsandtricksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TipsandtricksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
