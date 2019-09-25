import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeNavigationPanelComponent } from './home-navigation-panel.component';

describe('HomeNavigationPanelComponent', () => {
  let component: HomeNavigationPanelComponent;
  let fixture: ComponentFixture<HomeNavigationPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeNavigationPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeNavigationPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
