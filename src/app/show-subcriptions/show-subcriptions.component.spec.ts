import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowSubcriptionsComponent } from './show-subcriptions.component';

describe('ShowSubcriptionsComponent', () => {
  let component: ShowSubcriptionsComponent;
  let fixture: ComponentFixture<ShowSubcriptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowSubcriptionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowSubcriptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
