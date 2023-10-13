import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HomePrivacyComponent } from './home/privacy/privacy.component';
import { HomeRulesComponent } from './home/rules/rules.component';
import { HomeContactsComponent } from './home/contacts/contacts.component';
import { AccountManageComponent } from './account/manage/manage.component';
import { AccountLoginComponent } from './account/login/login.component';
import { AccountRegisterComponent } from './account/register/register.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'home/privacy', component: HomePrivacyComponent },
  { path: 'home/rules', component: HomeRulesComponent },
  { path: 'home/contacts', component: HomeContactsComponent },

  { path: 'account/manage', component: AccountManageComponent },
  { path: 'account/login', component: AccountLoginComponent },
  { path: 'account/register', component: AccountRegisterComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HomePrivacyComponent,
    HomeRulesComponent,
    HomeContactsComponent,

    AccountManageComponent,
    AccountLoginComponent,
    AccountRegisterComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
