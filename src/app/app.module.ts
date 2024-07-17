import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FusireCityComponent } from './fusire-city/fusire-city.component';
import { FusireFooterComponent } from './fusire-footer/fusire-footer.component';
import { FusireHeaderComponent } from './fusire-header/fusire-header.component';
import { FusireProvinceComponent } from './fusire-province/fusire-province.component';
import { MaterialModule } from './modules/material-ui.module';

@NgModule({
  declarations: [
    AppComponent,
    FusireProvinceComponent,
    FusireCityComponent,
    FusireHeaderComponent,
    FusireFooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
