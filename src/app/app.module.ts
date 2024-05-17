import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSliderModule } from '@angular/material/slider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { DescriptionTabComponent } from './description-tab/description-tab.component';
import { CustomPipesPageComponent } from './custom-pipes-page/custom-pipes-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TextLimitTo5CharsPipe } from './custom pipes/textLimitTo5CharsPipe/text-limit-to5-chars.pipe';
import { ReactiveFormsModule } from '@angular/forms';
import { SignedDecimalNumberPipePipe } from './custom pipes/signedDecimalNumbersPipe/signed-decimal-number-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DescriptionTabComponent,
    CustomPipesPageComponent,
    TextLimitTo5CharsPipe,
    SignedDecimalNumberPipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatButtonModule,
    MatTabsModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule
  ],
  exports: [ MatInputModule, MatFormFieldModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

