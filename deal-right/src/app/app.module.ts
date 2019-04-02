import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FtproductsComponent } from './ftproducts/ftproducts.component';
import { HeroComponent } from './hero/hero.component';
import { TrustBadgesComponent } from './trust-badges/trust-badges.component';
import { FooterComponent } from './footer/footer.component';
import { NewsletterformComponent } from './newsletterform/newsletterform.component';
import { EmailListService } from './email-list.service';
import { ProductDataService } from './product-data.service';
import { CartService } from './cart.service';

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
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [EmailListService, ProductDataService, CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
