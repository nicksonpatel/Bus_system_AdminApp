import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowDestinationComponent } from './show-destination.component';

describe('ShowDestinationComponent', () => {
  let component: ShowDestinationComponent;
  let fixture: ComponentFixture<ShowDestinationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowDestinationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowDestinationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
