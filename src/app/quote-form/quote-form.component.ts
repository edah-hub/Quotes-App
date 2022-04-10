//import { expressionType } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {

  @Output() addQuote = new EventEmitter<Quote>();
  @ViewChild ('entryForm') form: any;
  
  enableAdd: boolean = false;
  newQuote = new Quote(0, "", "", "", new Date(), 0, 0);
 
  submitQuote(){ 
    this.addQuote.emit(this.newQuote); 
    this.newQuote = new Quote(0, "", "", "", new Date(), 0, 0);
    this.form.reset();   
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
