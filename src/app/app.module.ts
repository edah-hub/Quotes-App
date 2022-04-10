import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
//import { AppRoutingModule } from './app-routing.module';
import { QuoteFormComponent } from './quote-form/quote-form.component';
import { QuoteInfoComponent } from './quote-info/quote-info.component';
import { QuotesComponent } from './quotes/quotes.component';
import { DateCountPipe } from './date-count.pipe';
import { HighlightDirective } from './highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    QuoteFormComponent,
    QuoteInfoComponent,
    QuotesComponent,
    DateCountPipe,
    HighlightDirective   
  ],

  imports: [
    BrowserModule,
    FormsModule,
    //AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
