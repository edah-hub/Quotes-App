export class Quote {
    id: number;
    quote: string;
    downvotes: number;
    upvotes: number;
    constructor(id:number,quote:string,downvotes:number,upvotes:number){
        this.id=id;
        this.quote=quote;
        this.downvotes=downvotes;
        this.upvotes=upvotes;
    }
}
