import { HttpClientModule } from '@angular/common/http';
import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { TestComponent } from './test-component/test-component';
import { AboutComponent } from './about-component/about-component';
import { Login } from './login/login';
import { Header } from './header/header';
import { Footer } from './footer/footer';

@NgModule({
  declarations: [
    App,
    TestComponent,
    AboutComponent,
    Login,
    Header,
    Footer
  ],
  imports: [
    BrowserModule, HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
