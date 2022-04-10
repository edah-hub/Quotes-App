import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-info',
  templateUrl: './quote-info.component.html',
  styleUrls: ['./quote-info.component.css']
})
export class QuoteInfoComponent implements OnInit {

  @Input() quote: Quote;
  @Output() isDelete = new EventEmitter<boolean>();

  deleteQuote(complete:boolean){
  this.isDelete.emit(complete);
  }


  constructor() { 

  }

  ngOnInit(): void {

  }
}