import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeRulesComponent } from './rules.component';

describe('RulesComponent', () => {
  let component: HomeRulesComponent;
  let fixture: ComponentFixture<HomeRulesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeRulesComponent]
    });
    fixture = TestBed.createComponent(HomeRulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
