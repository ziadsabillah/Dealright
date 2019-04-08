import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatTableModule, MatTable } from '@angular/material/table';
import { MatDividerModule } from '@angular/material/divider';

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
import { ModalService } from './modal.service';
import { HomeComponent } from './home/home.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ModalModule } from './addtocart-modal/modal.module';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FtproductsComponent,
    HeroComponent,
    TrustBadgesComponent,
    FooterComponent,
    NewsletterformComponent,
    HomeComponent,
    CheckoutComponent,
    ShoppingCartComponent,
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    NgbModule,
    MatTableModule,
    MatDividerModule,
    ModalModule
   ],
  providers: [EmailListService, ProductDataService, CartService, ModalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
