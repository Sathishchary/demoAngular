import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReusetemplateComponent } from './reusetemplate.component';

describe('ReusetemplateComponent', () => {
  let component: ReusetemplateComponent;
  let fixture: ComponentFixture<ReusetemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReusetemplateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReusetemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
