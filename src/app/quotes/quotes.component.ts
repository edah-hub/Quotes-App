import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

// import { HighlightDirective } from '../highlight.directive';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  // ngOnInit(): void {
  //   throw new Error('Method not implemented.');
  // }
  quotes:Quote[] = [
  
    new Quote(1,'The technology you use impresses no one. The experience you create with it is everything.', 'Sean Gerety', 'ECC@04', new Date(2022, 1, 6), 0, 0),
    new Quote(2, 'Life is what happens when you’re busy making other plans.', 'John Lennon', 'Joe1', new Date(2021, 2,8), 0, 0),
    new Quote (3, 'Many of life’s failures are people who did not realize how close they were to success when they gave up.', 'Thomas A. Edison', 'Blue Ivy', new Date(2020, 1, 5), 0, 0),
    new Quote (4, 'You only live once, but if you do it right, once is enough.', 'Mae West', 'Unit2', new Date (2022, 0, 1), 0, 0),
    new Quote (5, 'The big lesson in life, baby, is never be scared of anyone or anything.', 'Frank Sinatra','user04', new Date (2022, 2, 27), 0, 0),
    new Quote (6, 'Get busy living or get busy dying.', 'Stephen King', 'User', new Date (2020, 6, 25),0, 0)
  ]
  
  array:number[]=this.quotes.map(quote=>quote.upvote)
  highest=Math.max(...this.array)
 

  addNewQuote(value: Quote){
    value.submissionDate = new Date(value.submissionDate);
    this.quotes.unshift(value);
  }
  
  quoteDelete(isDelete: any, index: number){
    if (isDelete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].authorName}'s quote?`)
      if (toDelete){
        this.quotes.splice(index,1);
      }    
    }
  }
  counter:number;
  mostUpvotedQuote: number;
  currentLikes: number;

  highestLikes(){
    this.mostUpvotedQuote = this.quotes[0].upvote
    for (this.counter = 0; this.counter < this.quotes.length;this.counter++){
      this.currentLikes = this.quotes[this.counter].upvote;
      if(this.currentLikes > this.mostUpvotedQuote){
        this.mostUpvotedQuote = this.currentLikes 
      }
    }
      return this.mostUpvotedQuote
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
function constructor() {
  throw new Error('Function not implemented.');
}

function ngOnInit() {
  throw new Error('Function not implemented.');
}

