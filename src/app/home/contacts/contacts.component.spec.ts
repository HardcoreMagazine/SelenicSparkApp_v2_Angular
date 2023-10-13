import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeContactsComponent } from './contacts.component';

describe('ContactsComponent', () => {
  let component: HomeContactsComponent;
  let fixture: ComponentFixture<HomeContactsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeContactsComponent]
    });
    fixture = TestBed.createComponent(HomeContactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
