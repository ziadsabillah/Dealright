import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FtproductsComponent } from './ftproducts/ftproducts.component';
import { HeroComponent } from './hero/hero.component';
import { TrustBadgesComponent } from './trust-badges/trust-badges.component';
import { FooterComponent } from './footer/footer.component';
import { NewsletterformComponent } from './newsletterform/newsletterform.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FtproductsComponent,
    HeroComponent,
    TrustBadgesComponent,
    FooterComponent,
    NewsletterformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
