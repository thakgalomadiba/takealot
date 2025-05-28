import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NavTabsPage } from './nav-tabs.page';

describe('NavTabsPage', () => {
  let component: NavTabsPage;
  let fixture: ComponentFixture<NavTabsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(NavTabsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
