import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SneakerDetailOverviewComponent } from './sneaker-detail-overview.component';

describe('SneakerDetailOverviewComponent', () => {
  let component: SneakerDetailOverviewComponent;
  let fixture: ComponentFixture<SneakerDetailOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SneakerDetailOverviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SneakerDetailOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
