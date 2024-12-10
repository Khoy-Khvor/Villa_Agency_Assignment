import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PropertiesComponent } from './properties/properties.component';
import { PropertyDetailComponent } from './property-detail/property-detail.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SlideComponent } from './home/slide/slide.component';
import { FeaturedComponent } from './home/featured/featured.component';
import { VideoViewComponent } from './home/video-view/video-view.component';
import { BestDealComponent } from './home/best-deal/best-deal.component';
import { PropertiesHomeComponent } from './home/properties-home/properties-home.component';
import { ContactHomeComponent } from './home/contact-home/contact-home.component';
import { HttpClientModule } from '@angular/common/http';

import { StepsModule } from 'primeng/steps';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { PanelMenuModule } from 'primeng/panelmenu';
import { BadgeModule } from 'primeng/badge';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PropertiesComponent,
    PropertyDetailComponent,
    ContactUsComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    SlideComponent,
    FeaturedComponent,
    VideoViewComponent,
    BestDealComponent,
    PropertiesHomeComponent,
    ContactHomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ToastModule,
    StepsModule,
    PanelMenuModule,
    BadgeModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [provideClientHydration(), MessageService],
  bootstrap: [AppComponent],
})
export class AppModule {}
