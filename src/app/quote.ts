// export class Quote {
//     id: number;
//     quote: string;
//     downvotes: number;
//     upvotes: number;
//     constructor(id:number,quote:string,downvotes:number,upvotes:number){
//         this.id=id;
//         this.quote=quote;
//         this.downvotes=downvotes;
//         this.upvotes=upvotes;
//     }
// }


export class Quote {
    public showDetails: boolean;
    constructor(
      public  id: number,
      public quote: string,
      public authorName: string,
      public submittedBy: string,
      public submissionDate: Date,
      public upvote: number,
      public downvote: number
    ){
      this.showDetails=false;
    }
  }
  