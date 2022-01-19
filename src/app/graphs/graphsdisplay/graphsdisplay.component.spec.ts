import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphsdisplayComponent } from './graphsdisplay.component';

describe('GraphsdisplayComponent', () => {
  let component: GraphsdisplayComponent;
  let fixture: ComponentFixture<GraphsdisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraphsdisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphsdisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
