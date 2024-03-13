import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SecondComponent } from './temp/second-component/second-component.component';
import { HomePageComponent } from './home-page/home-page.component';
import { FirstComponentComponent } from './temp/first-component/first-component.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SearchButtonComponent } from './search-button/search-button.component';
import { TextHighlighterDirective } from './text-highlighter.directive';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
   declarations: [
      AppComponent,
      FirstComponentComponent,
      SecondComponent,
      HomePageComponent,
      FooterComponent,
      HeaderComponent,
      SearchButtonComponent,
      TextHighlighterDirective
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      ReactiveFormsModule
   ],
   providers: [],
   bootstrap: [AppComponent]
})
export class AppModule { }
