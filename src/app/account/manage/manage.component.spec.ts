import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountManageComponent } from './manage.component';

describe('ManageComponent', () => {
  let component: AccountManageComponent;
  let fixture: ComponentFixture<AccountManageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AccountManageComponent]
    });
    fixture = TestBed.createComponent(AccountManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
