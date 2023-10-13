import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePrivacyComponent } from './privacy.component';

describe('PrivacyComponent', () => {
  let component: HomePrivacyComponent;
  let fixture: ComponentFixture<HomePrivacyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomePrivacyComponent]
    });
    fixture = TestBed.createComponent(HomePrivacyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
