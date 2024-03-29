//import { expressionType } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {
  newQuote = new Quote(0, "", "", "", new Date(), 0, 0);
  @Output() add = new EventEmitter<Quote>();

  // @ViewChild ('entryForm') form: any;

    
  // enableAdd: boolean = false;
 
  // Quotes: any;
  // quotes: any;
    addQuote(){
      this.add.emit(this.newQuote); 
     this.newQuote = new Quote(0, "", "", "", new Date(), 0, 0);
    }
   
  // submitQuote(){ 
  //   this.addQuote.emit(this.newQuote); 
  //   this.newQuote = new Quote(0, "", "", "", new Date(), 0, 0);
  //   this.form.reset();   
  // } 

  // addNewQuote (quote:Quote){
  //   let arraysize = this.Quotes.length;
  //   quote.id = arraysize + 1;
  //   quote.completeDate = new Date(quote.completeDate)
  //   this.quotes.push(quote)
  // }
 

  constructor() { }

  ngOnInit(): void {
  }

}
